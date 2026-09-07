import { useEffect, useRef, type ReactNode } from "react";
import { X } from "lucide-react";
export function Modal({
  isOpen = true,
  onClose,
  title,
  children,
  size,
  closeOnClickOutside = false,
}: {
  isOpen?: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  size?: string;
  closeOnClickOutside?: boolean;
}) {
  const ref = useRef<HTMLElement>(null),
    closeRef = useRef(onClose);
  closeRef.current = onClose;
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.activeElement as HTMLElement;
    const node = ref.current;
    (
      node?.querySelector("[autofocus],input,textarea,button") as HTMLElement
    )?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        closeRef.current();
      }
      if (e.key === "Tab" && node) {
        const elements = [
          ...node.querySelectorAll<HTMLElement>(
            'button:not(:disabled),input:not(:disabled),textarea:not(:disabled),select:not(:disabled),a[href],[tabindex="0"]',
          ),
        ].filter((x) => x.getClientRects().length);
        const first = elements[0],
          last = elements.at(-1);
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    node?.addEventListener("keydown", key);
    return () => {
      node?.removeEventListener("keydown", key);
      previous?.focus();
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return (
    <div
      className="modal-backdrop"
      onMouseDown={(e) => {
        if (closeOnClickOutside && e.target === e.currentTarget) onClose();
      }}
    >
      <section
        ref={ref}
        className={`modal ${size === "xl" ? "modal-wide" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={onClose} aria-label="Закрыть">
            <X size={20} />
          </button>
        </div>
        {children}
      </section>
    </div>
  );
}
