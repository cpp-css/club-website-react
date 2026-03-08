import { useState, useEffect } from "react";

/**
 * useModalController — manages open/close state for a single modal.
 *
 * Handles:
 *  - selected item state (generic T)
 *  - body scroll lock (hidden on open, restored on close)
 *  - Escape key dismissal
 *
 * Usage:
 *   const { selected, open, close } = useModalController<MyType>();
 */
export function useModalController<T>() {
  const [selected, setSelected] = useState<T | null>(null);

  const open = (item: T) => {
    setSelected(item);
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    setSelected(null);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, []);

  return { selected, open, close } as const;
}
