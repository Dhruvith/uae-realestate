"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";


import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { BrokerDashboardMockup } from "@/components/mockups/BrokerDashboardMockup";
import { PipelineMockup } from "@/components/mockups/PipelineMockup";
import { PaymentTrackerMockup } from "@/components/mockups/PaymentTrackerMockup";
import { ClientPortalMockup } from "@/components/mockups/ClientPortalMockup";

export function FeaturesSection() {
    const prefersReduced = useReducedMotion();

    const features = [
        {
            title: "Client CRM",
            subtitle: "Know where every client stands. Always.",
            desc: "Complete client profiles with property associations, deal status, communication notes, and full history. Stop digging through WhatsApp to find what you told someone.",
            bullets: [
                "Client profiles with full deal history",
                "Property association + developer tracking",
                "Status pipeline view per client",
            ],
            Mockup: () => <BrokerDashboardMockup />,
        },
        {
            title: "Deal Pipeline",
            subtitle: "Your pipeline. Visual. Drag. Done.",
            desc: "Five stages from Lead to Closed. See every deal's position at a glance. Move deals forward without losing track of anything.",
            bullets: [
                "Lead → Reserved → Docs → Payment → Closed",
                "Drag-and-drop workflow",
                "Time-in-stage tracking + alerts",
            ],
            Mockup: () => <PipelineMockup />,
            reverse: true,
        },
        {
            title: "Payment Tracker",
            subtitle: "Installments tracked. Reminders automatic.",
            desc: "Log full installment schedules. Mark paid, pending, or overdue. Clients receive automatic reminders before due dates. You never have to chase manually again.",
            bullets: [
                "Full installment schedule builder",
                "Paid / Pending / Overdue status",
                "Auto-reminders to broker and client",
            ],
            Mockup: () => <PaymentTrackerMockup className="h-[400px]" />,
        },
        {
            title: "Document Vault",
            subtitle: "Every document. One place. Accessible.",
            desc: "Upload SPAs, payment receipts, NOCs, and approvals. Clients access their own documents through their portal. No more 'can you resend the contract' messages.",
            bullets: [
                "Secure cloud document storage",
                "Client read-only document access",
                "Organized by deal and client",
            ],
            Mockup: () => <ClientPortalMockup className="h-[450px]" />,
            reverse: true,
        },
        {
            title: "Company Mode",
            subtitle: "Run your brokerage. Not just your own desk.",
            desc: "Add brokers to your team, assign clients, and watch every deal in your company from one admin view. Know what's happening before problems happen.",
            bullets: [
                "Multi-broker team management",
                "Client assignment and reassignment",
                "Full deal visibility across team",
            ],
            Mockup: () => (
                <BrokerDashboardMockup className="border-gold-primary/30 shadow-gold" />
            ),
        },
    ];

    return (
        <SectionWrapper id="features" className="bg-bg-secondary pt-32 pb-4">
            <div className="max-w-[1280px] mx-auto px-6">

                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: prefersReduced ? 1 : 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={prefersReduced ? { duration: 0 } : { duration: 0.6 }}
                    >
                        <span className="text-gold-primary text-xs tracking-[0.2em] font-mono uppercase mb-4 block">Platform Features</span>
                        <h2 className="font-display text-[40px] md:text-[52px] leading-tight mb-4 text-balance">
                            Everything a serious UAE broker needs.
                        </h2>
                        <p className="text-text-secondary text-lg">Built specifically for off-plan. No generic CRM bloat.</p>
                    </motion.div>
                </div>

                <div className="flex flex-col gap-32 lg:gap-40">
                    {features.map((feature, i) => (
                        <FeatureRow key={i} {...feature} prefersReduced={prefersReduced} index={i} />
                    ))}
                </div>

            </div>
        </SectionWrapper>
    );
}

function FeatureRow({
    title, subtitle, desc, bullets, Mockup, reverse, prefersReduced, index
}: any) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

    return (
        <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
            {/* Text Content */}
            <motion.div
                className={`flex flex-col ${reverse ? "lg:order-2" : "lg:order-1"}`}
                initial={{ opacity: prefersReduced ? 1 : 0, x: prefersReduced ? 0 : reverse ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={prefersReduced ? { duration: 0 } : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <span className="text-text-muted font-mono uppercase text-sm tracking-wider mb-2">{title}</span>
                <h3 className="font-display text-3xl md:text-4xl leading-tight mb-4">{subtitle}</h3>
                <p className="text-text-secondary text-lg leading-relaxed mb-8">{desc}</p>

                <ul className="flex flex-col gap-4">
                    {bullets.map((bullet: string, j: number) => (
                        <motion.li
                            key={j}
                            className="flex items-start gap-4 text-text-primary text-sm md:text-base font-medium"
                            initial={{ opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={prefersReduced ? { duration: 0 } : { duration: 0.4, delay: j * 0.1 + 0.3 }}
                        >
                            <CheckCircle2 className="w-5 h-5 text-gold-primary shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>

            {/* Mockup with Subtle Parallax */}
            <motion.div
                className={`relative w-full ${reverse ? "lg:order-1" : "lg:order-2"}`}
                style={{ y: prefersReduced ? 0 : y }}
            >
                <motion.div
                    initial={{ opacity: prefersReduced ? 1 : 0, scale: prefersReduced ? 1 : 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-200px" }}
                    transition={prefersReduced ? { duration: 0 } : { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                >
                    <Mockup />
                </motion.div>
            </motion.div>
        </div>
    );
}
