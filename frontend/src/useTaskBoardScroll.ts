import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";

import type { Board as TaskBoard } from "./types";

type BoardPanState = {
  pointerId: number;
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  scrollLeft: number;
  scrollTop: number;
  frameId: number | null;
};

type UseTaskBoardScrollOptions = {
  board: TaskBoard | null;
  desktopWideMode: boolean;
  loading: boolean;
};

export function useTaskBoardScroll({
  board,
  desktopWideMode,
  loading,
}: UseTaskBoardScrollOptions) {
  const boardScrollRef = useRef<HTMLDivElement | null>(null);
  const boardPanRef = useRef<BoardPanState | null>(null);
  const [viewportHeight, setViewportHeight] = useState(0);

  const applyBoardPan = useCallback(() => {
    const pan = boardPanRef.current;
    const container = boardScrollRef.current;
    if (!pan || !container) return;

    pan.frameId = null;
    container.scrollLeft = pan.scrollLeft - (pan.currentX - pan.startX);
    container.scrollTop = pan.scrollTop - (pan.currentY - pan.startY);
  }, []);

  const startBoardPan = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (event.button !== 1) return;
      const container = boardScrollRef.current;
      if (!container) return;

      event.preventDefault();
      event.stopPropagation();
      boardPanRef.current = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        currentX: event.clientX,
        currentY: event.clientY,
        scrollLeft: container.scrollLeft,
        scrollTop: container.scrollTop,
        frameId: null,
      };
      container.setPointerCapture(event.pointerId);
      container.classList.add("cursor-grabbing", "select-none");
    },
    [],
  );

  const moveBoardPan = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      const pan = boardPanRef.current;
      if (!pan || pan.pointerId !== event.pointerId) return;

      event.preventDefault();
      event.stopPropagation();
      pan.currentX = event.clientX;
      pan.currentY = event.clientY;
      if (pan.frameId === null) {
        pan.frameId = window.requestAnimationFrame(applyBoardPan);
      }
    },
    [applyBoardPan],
  );

  const finishBoardPan = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      const pan = boardPanRef.current;
      const container = boardScrollRef.current;
      if (!pan || pan.pointerId !== event.pointerId) return;

      event.preventDefault();
      event.stopPropagation();
      pan.currentX = event.clientX;
      pan.currentY = event.clientY;
      if (pan.frameId !== null) {
        window.cancelAnimationFrame(pan.frameId);
        pan.frameId = null;
      }
      applyBoardPan();
      boardPanRef.current = null;
      container?.classList.remove("cursor-grabbing", "select-none");
      if (container?.hasPointerCapture(event.pointerId)) {
        container.releasePointerCapture(event.pointerId);
      }
    },
    [applyBoardPan],
  );

  useEffect(() => {
    const container = boardScrollRef.current;
    if (!container || loading) return undefined;

    let scrollFrameId: number | null = null;

    const updateMobileLaneHeights = () => {
      const lanes = container.querySelectorAll<HTMLElement>(
        ".tasks-mobile-lane-viewport",
      );
      if (window.matchMedia("(min-width: 80rem)").matches) {
        lanes.forEach((lane) =>
          lane.style.removeProperty("--tasks-mobile-lane-height"),
        );
        return;
      }

      const visualViewport = window.visualViewport;
      const viewportTop = visualViewport?.offsetTop || 0;
      const viewportBottom =
        viewportTop + (visualViewport?.height || window.innerHeight);
      const appHeader = document.querySelector<HTMLElement>(".app-header");
      const appHeaderRect = appHeader?.getBoundingClientRect();
      const headerIsAtBottom = Boolean(
        appHeaderRect &&
          appHeaderRect.top >
            viewportTop + (viewportBottom - viewportTop) / 2 &&
          appHeaderRect.bottom >= viewportBottom - 2,
      );
      const availableBottom =
        (headerIsAtBottom ? appHeaderRect?.top : viewportBottom) ||
        viewportBottom;
      const scrollbarSpace = 12;

      lanes.forEach((lane) => {
        const laneTop = lane.getBoundingClientRect().top;
        // Ячейка подколонки находится внутри обёртки с нижним padding и border.
        // Учитываем их, чтобы низ группы совпадал с низом обычной колонки.
        const nestedGroupSpacing = lane.closest(".tasks-board-column-group")
          ? 9
          : 0;
        const nextHeight = Math.max(
          160,
          Math.floor(
            availableBottom - laneTop - scrollbarSpace - nestedGroupSpacing,
          ),
        );
        const value = `${nextHeight}px`;
        if (
          lane.style.getPropertyValue("--tasks-mobile-lane-height") !== value
        ) {
          lane.style.setProperty("--tasks-mobile-lane-height", value);
        }
      });
    };

    const updateViewportHeight = () => {
      const nextHeight = container.clientHeight;
      setViewportHeight((currentHeight) =>
        currentHeight === nextHeight ? currentHeight : nextHeight,
      );
    };

    const updateContentBottomState = () => {
      scrollFrameId = null;
      const updates = Array.from(
        container.querySelectorAll<HTMLElement>(".tasks-board-column-group"),
        (group) => {
          const content = group.querySelector<HTMLElement>(
            ".tasks-board-column-content",
          );
          const stickyHeader = group.querySelector<HTMLElement>(
            ".tasks-board-group-header-sticky",
          );
          const reached =
            content && stickyHeader
              ? content.getBoundingClientRect().bottom <=
                stickyHeader.getBoundingClientRect().bottom + 1
              : false;
          return { group, value: reached ? "true" : "false" };
        },
      );

      updates.forEach(({ group, value }) => {
        if (group.dataset.contentBottomReached !== value) {
          group.dataset.contentBottomReached = value;
        }
      });
    };

    const scheduleContentBottomUpdate = () => {
      if (scrollFrameId === null) {
        scrollFrameId = window.requestAnimationFrame(updateContentBottomState);
      }
    };

    const handleResize = () => {
      updateMobileLaneHeights();
      updateViewportHeight();
      scheduleContentBottomUpdate();
    };

    updateMobileLaneHeights();
    updateViewportHeight();
    updateContentBottomState();
    container.addEventListener("scroll", scheduleContentBottomUpdate, {
      passive: true,
    });
    window.addEventListener("resize", handleResize, { passive: true });
    window.visualViewport?.addEventListener("resize", handleResize, {
      passive: true,
    });
    window.visualViewport?.addEventListener("scroll", handleResize, {
      passive: true,
    });

    const observer = new ResizeObserver(handleResize);
    observer.observe(container);
    if (container.parentElement) observer.observe(container.parentElement);
    container
      .querySelectorAll<HTMLElement>(".tasks-board-column-content")
      .forEach((content) => {
        observer.observe(content);
      });

    const mutationObserver = new MutationObserver(handleResize);
    mutationObserver.observe(container, { childList: true, subtree: true });

    return () => {
      container.removeEventListener("scroll", scheduleContentBottomUpdate);
      window.removeEventListener("resize", handleResize);
      window.visualViewport?.removeEventListener("resize", handleResize);
      window.visualViewport?.removeEventListener("scroll", handleResize);
      observer.disconnect();
      mutationObserver.disconnect();
      if (scrollFrameId !== null) {
        window.cancelAnimationFrame(scrollFrameId);
      }
    };
  }, [board, desktopWideMode, loading]);

  useEffect(
    () => () => {
      const pan = boardPanRef.current;
      if (pan?.frameId !== null && pan?.frameId !== undefined) {
        window.cancelAnimationFrame(pan.frameId);
      }
      boardScrollRef.current?.classList.remove(
        "cursor-grabbing",
        "select-none",
      );
      boardPanRef.current = null;
    },
    [],
  );

  return {
    boardScrollRef,
    finishBoardPan,
    moveBoardPan,
    startBoardPan,
    viewportHeight,
  };
}
