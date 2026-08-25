import { CheckCircle2, XCircle } from "lucide-react";
import type { ToastState } from "../hooks/useToast";

export function Toast({ toast }: { toast: ToastState }) {
  if (!toast) return null;

  const isSuccess = toast.variant === "success";

  return (
    <div
      role="status"
      className={`fixed bottom-6 left-1/2 z-200 flex -translate-x-1/2 items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium shadow-lg ${
        isSuccess
          ? "border-accent/40 bg-accent/15 text-accent-strong"
          : "border-red-500/40 bg-red-500/15 text-red-500"
      }`}
    >
      {isSuccess ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
      {toast.message}
    </div>
  );
}
