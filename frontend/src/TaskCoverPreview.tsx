import {
  Image,
  apiClient,
  getMediaKind,
  displayUserName,
} from "./mediaAdapters";
import {
  Check,
  ExternalLink,
  FileText,
  ImagePlus,
  Link2,
  Loader2,
  MessageSquare,
  Play,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import type { TaskAttachment, TaskCover } from "./types";

const coverVisibilityCallbacks = new Map<Element, () => void>();
let coverVisibilityObserver: IntersectionObserver | null = null;

function observeCoverVisibility(element: Element, onVisible: () => void) {
  if (typeof IntersectionObserver === "undefined") {
    onVisible();
    return () => undefined;
  }
  if (!coverVisibilityObserver) {
    coverVisibilityObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const callback = coverVisibilityCallbacks.get(entry.target);
          if (!callback) return;
          coverVisibilityCallbacks.delete(entry.target);
          coverVisibilityObserver?.unobserve(entry.target);
          callback();
        });
      },
      {
        rootMargin: "900px 700px",
        threshold: 0.01,
      },
    );
  }
  coverVisibilityCallbacks.set(element, onVisible);
  coverVisibilityObserver.observe(element);
  return () => {
    coverVisibilityCallbacks.delete(element);
    coverVisibilityObserver?.unobserve(element);
    if (coverVisibilityCallbacks.size === 0) {
      coverVisibilityObserver?.disconnect();
      coverVisibilityObserver = null;
    }
  };
}

function AuthenticatedCoverMedia({
  taskId,
  attachment,
}: {
  taskId: number;
  attachment: TaskAttachment;
}) {
  const [source, setSource] = useState<string | null>(null);
  const [sourceIsOriginal, setSourceIsOriginal] = useState(false);
  const [failed, setFailed] = useState(false);
  const video =
    getMediaKind({
      fileName: attachment.file_name,
      mimeType: attachment.mime_type,
    }) === "video";
  const attachmentId = attachment.id;
  const thumbnailUrl = attachment.thumbnail_url;
  const downloadUrl = attachment.download_url;
  const fileName = attachment.file_name;

  useEffect(() => {
    let active = true;
    let objectUrl: string | null = null;

    void apiClient
      .downloadTaskAttachmentThumbnail(taskId, {
        id: attachmentId,
        thumbnail_url: thumbnailUrl,
      })
      .then((blob) => ({ blob, original: false }))
      .catch(async () => {
        const { blob } = await apiClient.downloadTaskAttachment(taskId, {
          id: attachmentId,
          download_url: downloadUrl,
          file_name: fileName,
        });
        return { blob, original: true };
      })
      .then(({ blob, original }) => {
        if (!active) return;
        objectUrl = URL.createObjectURL(blob);
        setSourceIsOriginal(original);
        setSource(objectUrl);
      })
      .catch(() => {
        if (active) setFailed(true);
      });

    return () => {
      active = false;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [attachmentId, downloadUrl, fileName, taskId, thumbnailUrl]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[var(--surface-secondary)]">
      {source ? (
        <>
          {video && sourceIsOriginal ? (
            <video
              src={source}
              muted
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />
          ) : (
            <Image
              src={source}
              alt=""
              fill
              unoptimized
              sizes="272px"
              className="object-cover"
              draggable={false}
            />
          )}
          {video ? (
            <span className="app-surface-elevated pointer-events-none absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full border border-[var(--border-subtle)]">
              <Play size={13} className="translate-x-px" />
            </span>
          ) : null}
        </>
      ) : (
        <span className="app-text-muted absolute inset-0 flex items-center justify-center">
          {failed ? (
            <ImagePlus size={20} />
          ) : (
            <Loader2 size={18} className="animate-spin" />
          )}
        </span>
      )}
    </div>
  );
}

function LazyAuthenticatedCoverMedia({
  taskId,
  attachment,
}: {
  taskId: number;
  attachment: TaskAttachment;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || shouldLoad) return;
    return observeCoverVisibility(container, () => setShouldLoad(true));
  }, [shouldLoad]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden bg-[var(--surface-secondary)]"
    >
      {shouldLoad ? (
        <AuthenticatedCoverMedia
          key={attachment.id}
          taskId={taskId}
          attachment={attachment}
        />
      ) : null}
    </div>
  );
}

export default function TaskCoverPreview({
  taskId,
  cover,
  className = "",
}: {
  taskId: number;
  cover: TaskCover;
  className?: string;
}) {
  const commentMedia = useMemo(
    () =>
      cover.comment?.attachments.find((attachment) => {
        const kind = getMediaKind({
          fileName: attachment.file_name,
          mimeType: attachment.mime_type,
        });
        return kind === "image" || kind === "video";
      }),
    [cover.comment?.attachments],
  );
  const media = cover.kind === "attachment" ? cover.attachment : commentMedia;

  if (media) {
    return (
      <div
        className={`relative overflow-hidden bg-[var(--surface-secondary)] ${className}`}
      >
        <LazyAuthenticatedCoverMedia taskId={taskId} attachment={media} />
      </div>
    );
  }

  if (cover.kind === "checklist" && cover.checklist) {
    const { completed, items, total } = cover.checklist;
    if (total <= 0 || items.length === 0) return null;
    const progress = Math.round((completed / total) * 100);
    return (
      <div
        className={`app-surface-muted flex flex-col justify-center overflow-hidden p-2 ${className}`}
      >
        <div className="flex items-center gap-2">
          <div className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-[var(--surface-secondary)]">
            <div
              className="h-full rounded-full bg-emerald-500 transition-[width]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="app-text-muted shrink-0 text-[9px] tabular-nums">
            {completed}/{total}
          </span>
        </div>
        <div className="mt-1.5 space-y-0.5 overflow-hidden">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex min-w-0 items-center gap-1.5 text-[10px] leading-3.5"
            >
              <span
                className={`flex h-3 w-3 shrink-0 items-center justify-center rounded-sm border ${
                  item.is_completed
                    ? "border-emerald-500 bg-emerald-500 text-white"
                    : "border-[var(--border-strong)]"
                }`}
              >
                {item.is_completed ? <Check size={8} /> : null}
              </span>
              <span
                className={`truncate ${item.is_completed ? "app-text-muted line-through" : "text-[var(--foreground)]"}`}
              >
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (cover.kind === "comment" && cover.comment) {
    return (
      <div
        className={`app-surface-muted flex flex-col justify-center overflow-hidden p-3 ${className}`}
      >
        <div className="flex items-center gap-2 text-xs font-semibold text-[var(--foreground)]">
          <MessageSquare size={14} className="shrink-0 text-sky-400" />
          <span className="truncate">
            {displayUserName(cover.comment.author)}
          </span>
        </div>
        <p className="app-text-wrap mt-2 line-clamp-3 text-xs leading-4 text-[var(--foreground)]">
          {cover.comment.text || "Комментарий с вложением"}
        </p>
      </div>
    );
  }

  if (cover.kind === "external_link" && cover.external_link) {
    let hostname = cover.external_link.url;
    try {
      hostname = new URL(cover.external_link.url).hostname;
    } catch {
      // Keep the original URL when it cannot be parsed by the browser.
    }
    return (
      <div
        className={`app-surface-muted flex flex-col justify-center overflow-hidden p-3 ${className}`}
      >
        <div className="flex items-center gap-2 text-xs font-semibold text-[var(--foreground)]">
          <ExternalLink size={14} className="shrink-0 text-cyan-400" />
          <span className="truncate">
            {cover.external_link.title || hostname}
          </span>
        </div>
        <p className="app-text-muted mt-2 truncate text-[10px]">{hostname}</p>
        <p className="app-text-muted mt-1 line-clamp-2 break-all text-[10px]">
          {cover.external_link.url}
        </p>
      </div>
    );
  }

  if (cover.kind === "linked_object" && cover.linked_object) {
    return (
      <div
        className={`app-surface-muted flex flex-col justify-center overflow-hidden p-3 ${className}`}
      >
        <div className="flex items-center gap-2 text-[10px] font-medium uppercase text-sky-400">
          <Link2 size={13} className="shrink-0" />
          <span className="truncate">{cover.linked_object.kind_display}</span>
        </div>
        <p className="mt-2 truncate text-xs font-semibold text-[var(--foreground)]">
          {cover.linked_object.title}
        </p>
        {cover.linked_object.description ? (
          <p className="app-text-muted mt-1 line-clamp-2 text-[10px] leading-4">
            {cover.linked_object.description}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className={`app-surface-muted flex items-center justify-center ${className}`}
    >
      <FileText size={20} className="app-text-muted" />
    </div>
  );
}
