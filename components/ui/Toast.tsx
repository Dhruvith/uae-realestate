"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ToastType = "success" | "error" | "warning";

interface ToastMessage {
    id: string;
    message: string;
    type: ToastType;
}

interface ToastContextValue {
    toast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<ToastMessage[]>([]);

    const addToast = (message: string, type: ToastType = "success") => {
        const id = Math.random().toString(36).substring(2, 9);
        setToasts((prev) => [...prev, { id, message, type }]);

        // Auto dismiss after 5 seconds
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 5000);
    };

    const removeToast = (id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <ToastContext.Provider value={{ toast: addToast }}>
            {children}
            <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
                <AnimatePresence>
                    {toasts.map((toast) => (
                        <motion.div
                            key={toast.id}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                            className={`pointer-events-auto flex items-center justify-between min-w-[300px] p-4 bg-bg-card border shadow-card rounded-md border-l-4 ${toast.type === "success"
                                    ? "border-l-gold-primary border-t-border-default border-r-border-default border-b-border-default"
                                    : toast.type === "error"
                                        ? "border-l-error border-t-border-default border-r-border-default border-b-border-default"
                                        : "border-l-warning border-t-border-default border-r-border-default border-b-border-default"
                                }`}
                        >
                            <p className="text-sm font-medium">{toast.message}</p>
                            <button
                                onClick={() => removeToast(toast.id)}
                                className="text-text-muted hover:text-text-primary ml-4 transition-colors p-1"
                                aria-label="Close"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (context === undefined) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
}
