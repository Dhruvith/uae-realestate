import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "secondary" | "outline" | "success" | "warning" | "error"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gold-primary focus:ring-offset-2 focus:ring-offset-bg-primary",
                {
                    "border-transparent bg-gold-primary text-bg-primary hover:bg-gold-light": variant === "default",
                    "border-transparent bg-bg-secondary text-text-primary hover:bg-bg-card": variant === "secondary",
                    "border-transparent bg-success/20 text-success": variant === "success",
                    "border-transparent bg-warning/20 text-warning": variant === "warning",
                    "border-transparent bg-error/20 text-error": variant === "error",
                    "text-text-primary border-border-default": variant === "outline",
                },
                className
            )}
            {...props}
        />
    )
}

export { Badge }
