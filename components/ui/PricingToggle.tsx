"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface PricingToggleProps {
    onToggle: (billing: "monthly" | "annual") => void;
    billing: "monthly" | "annual";
}

export function PricingToggle({ onToggle, billing }: PricingToggleProps) {
    return (
        <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm ${billing === "monthly" ? "text-text-primary" : "text-text-muted"}`}>
                Monthly
            </span>
            <button
                role="switch"
                aria-checked={billing === "annual"}
                onClick={() => onToggle(billing === "monthly" ? "annual" : "monthly")}
                className="relative h-8 w-16 rounded-full bg-bg-secondary border border-border-default overflow-hidden cursor-pointer"
            >
                <motion.div
                    className="absolute left-[3px] top-[2px] h-6 w-6 rounded-full bg-gold-primary"
                    animate={{ x: billing === "annual" ? 32 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
            </button>
            <span className={`flex items-center gap-2 text-sm ${billing === "annual" ? "text-text-primary text-gold-primary" : "text-text-muted"}`}>
                Annual
                <span className="bg-gold-primary/20 text-gold-primary text-xs font-bold px-2 py-0.5 rounded-full">
                    Save 20%
                </span>
            </span>
        </div>
    );
}
