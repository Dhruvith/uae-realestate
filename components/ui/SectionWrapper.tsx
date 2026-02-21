"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    id?: string;
    delay?: number;
}

export function SectionWrapper({ children, className, id, delay = 0 }: SectionWrapperProps) {
    const prefersReduced = useReducedMotion();
    const transition = prefersReduced
        ? { duration: 0 }
        : { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay };

    return (
        <motion.section
            id={id}
            className={cn("py-20 md:py-32 relative overflow-hidden", className)}
            initial={{ opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={transition}
        >
            {children}
        </motion.section>
    );
}
