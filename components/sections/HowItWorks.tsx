"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LayoutDashboard, Eye, CheckCircle } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function HowItWorks() {
    const prefersReduced = useReducedMotion();

    const steps = [
        {
            num: "01",
            title: "Brokers manage everything",
            icon: LayoutDashboard,
            desc: "Add clients, push deals through your visual pipeline, upload documents, and trigger payment reminders. Your command center for every deal."
        },
        {
            num: "02",
            title: "Clients see their deal",
            icon: Eye,
            desc: "Every client gets a secure read-only portal. Their property, payment schedule, and documents — always current, always accessible. Zero calls to you."
        },
        {
            num: "03",
            title: "Deals close professionally",
            icon: CheckCircle,
            desc: "No WhatsApp chaos. No scattered Excel files. Professional workflow that builds client trust and makes you look exceptional."
        }
    ];

    return (
        <SectionWrapper id="how-it-works" className="bg-bg-primary">
            <div className="max-w-[1280px] mx-auto px-6">

                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: prefersReduced ? 1 : 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={prefersReduced ? { duration: 0 } : { duration: 0.6 }}
                    >
                        <span className="text-gold-primary text-xs tracking-[0.2em] font-mono uppercase mb-4 block">The platform</span>
                        <h2 className="font-display text-[40px] md:text-[52px] leading-tight mb-4 max-w-2xl mx-auto">
                            Your entire deal flow,<br />finally organized.
                        </h2>
                        <p className="text-text-secondary text-lg font-medium">Three things. That's all it takes.</p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            className="relative overflow-hidden bg-bg-card rounded-xl border border-border-default p-8 hover:-translate-y-2 hover:shadow-card hover:border-border-active transition-all duration-300 z-10"
                            initial={{ opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={prefersReduced ? { duration: 0 } : { duration: 0.6, delay: i * 0.15 }}
                        >
                            <div className="absolute -bottom-8 -right-4 font-display text-[200px] leading-none text-gold-primary opacity-[0.04] pointer-events-none select-none z-0">
                                {step.num}
                            </div>

                            <div className="relative z-10 flex flex-col items-start">
                                <div className="w-12 h-12 rounded-lg bg-gold-primary/10 text-gold-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <step.icon className="w-6 h-6" strokeWidth={1.5} />
                                </div>
                                <h3 className="font-display text-2xl font-medium mb-3">{step.title}</h3>
                                <p className="text-text-secondary leading-relaxed text-sm md:text-base">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Animated Connecting Arrow line for Desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 z-0 border-t-2 border-dashed border-border-subtle" />
                </div>

            </div>
        </SectionWrapper>
    );
}
