import { cn } from "@/lib/utils"

function Skeleton({
    className,
    variant = "card",
    lines = 1,
    ...props
}: React.HTMLAttributes<HTMLDivElement> & {
    variant?: "text" | "card" | "stat" | "avatar";
    lines?: number;
}) {
    if (variant === "text") {
        return (
            <div className="flex flex-col gap-2 w-full">
                {Array.from({ length: lines }).map((_, i) => (
                    <div
                        key={i}
                        className={cn(
                            "animate-shimmer rounded-md bg-[linear-gradient(90deg,#141820_25%,#1A2030_50%,#141820_75%)] bg-[length:200%_100%]",
                            i === lines - 1 && lines > 1 ? "w-2/3" : "w-full",
                            "h-4",
                            className
                        )}
                        {...props}
                    />
                ))}
            </div>
        );
    }

    if (variant === "avatar") {
        return (
            <div
                className={cn(
                    "animate-shimmer rounded-full bg-[linear-gradient(90deg,#141820_25%,#1A2030_50%,#141820_75%)] bg-[length:200%_100%] w-10 h-10",
                    className
                )}
                {...props}
            />
        );
    }

    if (variant === "stat") {
        return (
            <div className="flex flex-col gap-2 items-center text-center">
                <div className={cn("animate-shimmer rounded-md bg-[linear-gradient(90deg,#141820_25%,#1A2030_50%,#141820_75%)] bg-[length:200%_100%] h-12 w-24", className)} {...props} />
                <div className="animate-shimmer rounded-md bg-[linear-gradient(90deg,#141820_25%,#1A2030_50%,#141820_75%)] bg-[length:200%_100%] h-4 w-32" />
            </div>
        );
    }

    return (
        <div
            className={cn(
                "animate-shimmer rounded-xl bg-[linear-gradient(90deg,#141820_25%,#1A2030_50%,#141820_75%)] bg-[length:200%_100%] w-full h-full min-h-[100px]",
                className
            )}
            {...props}
        />
    )
}

export { Skeleton }
