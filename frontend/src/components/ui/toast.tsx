import { motion, AnimatePresence } from "framer-motion";
import { LuX, LuInfo, LuCircleAlert, LuCircleCheck } from "react-icons/lu";
import type { Toast } from "@/hooks/useToast";

interface ToastProps {
  toast: Toast;
  onDismiss: (id: string) => void;
}

const getToastStyles = (variant: Toast["variant"]) => {
  switch (variant) {
    case "destructive":
      return {
        container: "bg-red-600/90 border-red-700 text-white",
        icon: <LuCircleAlert className="w-5 h-5" />,
      };
    case "success":
      return {
        container: "bg-green-600/90 border-green-700 text-white",
        icon: <LuCircleCheck className="w-5 h-5" />,
      };
    default:
      return {
        container: "bg-gray-800/90 border-gray-700 text-white",
        icon: <LuInfo className="w-5 h-5" />,
      };
  }
};

export function ToastComponent({ toast, onDismiss }: ToastProps) {
  const styles = getToastStyles(toast.variant);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className={`
        relative flex w-full max-w-sm items-center space-x-4 overflow-hidden rounded-lg border p-4 shadow-lg
        ${styles.container}
      `}
    >
      <div className="flex-shrink-0">{styles.icon}</div>

      <div className="flex-1 space-y-1">
        {toast.title && (
          <div className="text-sm font-semibold">{toast.title}</div>
        )}
        {toast.description && (
          <div className="text-sm opacity-90">{toast.description}</div>
        )}
      </div>

      <button
        onClick={() => onDismiss(toast.id)}
        className="flex-shrink-0 rounded-full p-1 hover:bg-black/20 transition-colors"
      >
        <LuX className="w-4 h-4" />
      </button>
    </motion.div>
  );
}

interface ToasterProps {
  toasts: Toast[];
  onDismiss: (id: string) => void;
}

export function Toaster({ toasts, onDismiss }: ToasterProps) {
  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col space-y-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastComponent key={toast.id} toast={toast} onDismiss={onDismiss} />
        ))}
      </AnimatePresence>
    </div>
  );
}
