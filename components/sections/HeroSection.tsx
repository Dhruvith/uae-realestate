"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BrokerDashboardMockup } from "@/components/mockups/BrokerDashboardMockup";
import { VideoBackground } from "@/components/ui/VideoBackground";
import Link from "next/link";

export function HeroSection() {
    const prefersReduced = useReducedMotion();

    const titleWords = "Where UAE Off-Plan Deals Get Done.".split(" ");

    const titleVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
    };

    const wordVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <section className="relative overflow-hidden min-h-screen flex items-center pt-24 pb-16">
            {/* VIDEO LAYER */}
            <VideoBackground
                src="/videos/hero-bg.mp4"
                preset="hero"
                showNoise={true}
            />

            {/* CONTENT LAYER */}
            <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-12">

                {/* Left Content */}
                <div className="lg:col-span-6 flex flex-col items-start pt-10">
                    <motion.div
                        initial={{ opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-8"
                    >
                        <span className="inline-block py-1.5 px-4 rounded-full border border-gold-primary/30 bg-gold-primary/10 text-gold-primary text-xs font-semibold tracking-wide uppercase shadow-[0_0_15px_rgba(201,169,110,0.1)]">
                            Now in early access • UAE only
                        </span>
                    </motion.div>

                    <motion.h1
                        className="font-display text-[48px] sm:text-[64px] lg:text-[72px] xl:text-[80px] leading-[1.05] tracking-tight mb-6"
                        initial="hidden"
                        animate="visible"
                        variants={prefersReduced ? { hidden: { opacity: 1 }, visible: { opacity: 1 } } : titleVariants}
                    >
                        {titleWords.map((word, index) => (
                            <motion.span
                                key={index}
                                className="inline-block mr-[0.25em]"
                                variants={prefersReduced ? { hidden: { opacity: 1 }, visible: { opacity: 1 } } : wordVariants}
                            >
                                {word}  {/* 'Off-Plan' should be forced to wrap if needed or just handle normally */}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: prefersReduced ? 1 : 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg md:text-xl text-text-secondary max-w-xl mb-10 leading-relaxed balance"
                    >
                        The only deal management platform built exclusively for UAE{" "}
                        <strong className="text-text-primary font-medium">off-plan brokers</strong>.
                        Your clients stop calling. Because they already know.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col sm:flex-row gap-4 mb-14"
                    >
                        <Button size="lg" asChild className="group pr-6">
                            <Link href="/demo">
                                Request Demo Access
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="ghost" className="group">
                            <Play className="mr-2 w-4 h-4 transition-colors group-hover:text-gold-primary" />
                            Watch 2-min Demo
                        </Button>
                    </motion.div>

                    {/* Social Proof */}
                    <motion.div
                        initial={{ opacity: prefersReduced ? 1 : 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-center gap-4 border-t border-border-subtle pt-6 w-full max-w-lg"
                    >
                        <div className="flex -space-x-3" style={{ perspective: "1000px" }}>
                            {['JA', 'SM', 'KA', 'FN', 'RK'].map((initial, i) => (
                                <motion.div
                                    key={i}
                                    className="w-10 h-10 rounded-full border-2 border-bg-primary bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gold-primary via-gold-dark to-gold-primary text-[10px] font-bold text-bg-primary flex items-center justify-center relative shadow-md"
                                    style={{ zIndex: 10 - i }}
                                    animate={prefersReduced ? {} : { y: [0, -6, 0], rotateX: [0, 15, 0], rotateY: [0, -10, 0] }}
                                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                                >
                                    {initial}
                                </motion.div>
                            ))}
                        </div>
                        <div className="flex flex-col text-sm">
                            <div className="flex text-gold-primary text-xs mb-1">
                                ★★★★★ <span className="text-text-primary ml-2 font-medium">4.9/5 rating</span>
                            </div>
                            <span className="text-text-muted text-xs leading-snug">
                                Trusted by 200+ brokers across Dubai,<br /> Abu Dhabi & Sharjah.
                                {/* static-marketing: update when real data available */}
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Content / Mockup */}
                <div className="lg:col-span-6 relative h-[600px] hidden lg:block perspective-[2000px]">
                    <motion.div
                        initial={{ opacity: prefersReduced ? 1 : 0, rotateY: 15, rotateX: 10, y: 100 }}
                        animate={{ opacity: 1, rotateY: -10, rotateX: 5, y: -20 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-1/2 -right-8 w-[800px] h-[550px]"
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <BrokerDashboardMockup className="shadow-2xl shadow-black/80" />

                        {/* Floating Badges */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -left-12 top-24 backdrop-blur-md bg-black/60 border border-gold-primary/30 rounded-lg p-3 shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex items-center gap-3 z-20"
                        >
                            <div className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
                            <div className="text-sm font-medium text-text-primary">12 active deals</div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            className="absolute right-32 -bottom-6 backdrop-blur-md bg-black/60 border border-warning/30 rounded-lg p-3 shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex items-center gap-3 z-20"
                        >
                            <div className="text-sm font-medium text-text-primary">⏰ Payment due in 3 days</div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
