"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Skeleton } from "@/components/ui/Skeleton";

export function StatsSection() {
    const prefersReduced = useReducedMotion();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const stats = [
        { target: 200, label: "Brokers Active", suffix: "+" }, // <!-- static-marketing: update when real data available -->
        { target: 2000, label: "Deals Tracked", prefix: "AED ", suffix: "M+" }, // Representing AED 2B+
        { target: 48, label: "Hrs To Onboard", suffix: "" },
        { target: 94, label: "Satisfied Clients", suffix: "%" },
    ];

    return (
        <section className="bg-bg-primary border-y border-border-default pt-24 pb-12 relative overflow-hidden">
            {/* Background Mesh */}
            <div className="absolute inset-0 z-0 bg-gold-primary/[0.02] mix-blend-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-primary/10 via-bg-primary to-bg-primary" />

            <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            className="flex flex-col items-center p-6 bg-bg-card/50 backdrop-blur-sm rounded-xl border border-white/5"
                            initial={{ opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {!mounted ? (
                                <Skeleton variant="stat" className="h-12 w-24 mb-2" />
                            ) : (
                                <div className="font-mono text-4xl md:text-5xl lg:text-6xl text-gold-primary mb-2 flex items-baseline">
                                    {stat.prefix && <span className="text-2xl mr-1">{stat.prefix}</span>}
                                    <AnimatedCounter value={stat.target} />
                                    <span className="text-3xl ml-1">{stat.suffix}</span>
                                </div>
                            )}
                            {mounted && (
                                <p className="text-text-secondary text-sm md:text-base font-medium uppercase tracking-widest">{stat.label}</p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
