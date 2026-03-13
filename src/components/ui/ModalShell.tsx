import type { CSSProperties, ReactNode } from "react";

interface ModalShellProps {
  onClose: () => void;
  children: ReactNode;
  /**
   * className for the fixed backdrop wrapper.
   * Defaults to the shared base: fixed inset-0 z-50 flex items-center justify-center p-4
   */
  backdropClassName?: string;
  /** Inline styles for the fixed backdrop wrapper (used for rgba backgrounds / blur) */
  backdropStyle?: CSSProperties;
}

/**
 * ModalShell — shared backdrop container used by Events and Projects modals.
 *
 * Renders:
 *  - Fixed backdrop div (className + style forwarded from caller)
 *  - children (the inner dialog)
 *  - An invisible full-size button behind children for backdrop-click-to-close
 */
export function ModalShell({
  onClose,
  children,
  backdropClassName = "fixed inset-0 z-50 flex items-center justify-center p-4",
  backdropStyle,
}: ModalShellProps) {
  return (
    <div className={backdropClassName} style={backdropStyle}>
      {children}
      <button
        onClick={onClose}
        className="absolute inset-0 -z-10 cursor-default"
        aria-label="Close"
      />
    </div>
  );
}
