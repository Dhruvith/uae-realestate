import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "ghost" | "outline" | "danger";
    size?: "default" | "sm" | "lg" | "icon";
    asChild?: boolean;
    isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        { className, variant = "default", size = "default", isLoading, children, disabled, asChild, ...props },
        ref
    ) => {
        const buttonClasses = cn(
            "inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-primary disabled:pointer-events-none disabled:opacity-50",
            {
                "bg-gold-primary text-bg-primary hover:bg-gold-light hover:scale-[1.03] hover:shadow-gold-hover":
                    variant === "default",
                "bg-transparent text-text-primary border border-border-default hover:border-gold-primary hover:bg-gold-primary/5":
                    variant === "ghost",
                "border border-border-default bg-bg-card hover:bg-bg-card-hover text-text-primary":
                    variant === "outline",
                "bg-error/10 text-error hover:bg-error hover:text-white":
                    variant === "danger",
                "h-10 px-4 py-2": size === "default",
                "h-9 px-3 text-sm": size === "sm",
                "h-12 px-8 text-lg": size === "lg",
                "h-10 w-10": size === "icon",
            },
            className
        );

        if (asChild && React.isValidElement(children)) {
            return React.cloneElement(children as React.ReactElement<any>, {
                className: cn(buttonClasses, children.props.className),
                ref: ref as any,
                ...props
            });
        }

        return (
            <button
                ref={ref}
                disabled={disabled || isLoading}
                className={buttonClasses}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button };
