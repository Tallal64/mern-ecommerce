import LoginForm from "@/components/auth/Login";
import { ToastProvider } from "@/providers/ToastProvider";

export default function LoginPage() {
  return (
    <ToastProvider>
      <div className="min-h-[80vh] flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <LoginForm />
      </div>
    </ToastProvider>
  );
}
