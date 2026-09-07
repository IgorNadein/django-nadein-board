import { useEffect, type ReactNode } from "react";
export function Modal({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
  isOpen?: boolean;
  noHeader?: boolean;
  noPadding?: boolean;
  size?: string;
  stackLevel?: number;
}) {
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopImmediatePropagation();
        onClose();
      }
    };
    document.addEventListener("keydown", listener, true);
    return () => document.removeEventListener("keydown", listener, true);
  }, [onClose]);
  return (
    <div className="modal-backdrop" style={{ zIndex: 150 }}>
      <section
        role="dialog"
        aria-label="Кадрирование аватара"
        className="modal"
        style={{ padding: 0, overflow: "hidden" }}
      >
        {children}
      </section>
    </div>
  );
}
