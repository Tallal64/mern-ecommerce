import { createContext, useContext, type ReactNode } from "react";
import { useToast } from "@/hooks/useToast";
import { Toaster } from "@/components/ui/toast";

const ToastContext = createContext<ReturnType<typeof useToast> | undefined>(
  undefined
);

export function ToastProvider({ children }: { children: ReactNode }) {
  const toastUtils = useToast();

  return (
    <ToastContext.Provider value={toastUtils}>
      {children}
      <Toaster toasts={toastUtils.toasts} onDismiss={toastUtils.dismiss} />
    </ToastContext.Provider>
  );
}

export function useToastContext() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToastContext must be used within a ToastProvider");
  }
  return context;
}
