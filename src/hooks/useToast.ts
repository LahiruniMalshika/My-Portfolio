import { useCallback, useRef, useState } from "react";

export type ToastState = { message: string; variant: "success" | "error" } | null;

export function useToast() {
  const [toast, setToast] = useState<ToastState>(null);
  const timeoutRef = useRef<number | undefined>(undefined);

  const showToast = useCallback((message: string, variant: "success" | "error") => {
    window.clearTimeout(timeoutRef.current);
    setToast({ message, variant });
    timeoutRef.current = window.setTimeout(() => setToast(null), 4000);
  }, []);

  return { toast, showToast };
}
