"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CheckCircle2, ShieldCheck, MapPin, PhoneCall, Zap, RotateCcw } from "lucide-react";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { PricingToggle } from "@/components/ui/PricingToggle";
import { Badge } from "@/components/ui/Badge";
import { formatCurrency } from "@/lib/utils";

export function PricingSection() {
    const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
    const prefersReduced = useReducedMotion();

    const plans = [
        {
            name: "SOLO",
            price: { monthly: 0, annual: 0 },
            desc: "For independent brokers starting out",
            features: [
                "5 active clients",
                "Basic deal pipeline",
                "Client portal access",
                "1GB document storage",
                "Email support",
            ],
            cta: "Start Free — No Card Needed",
            ctaHref: "/demo",
            ctaVariant: "outline" as const,
        },
        {
            name: "PROFESSIONAL",
            price: { monthly: 199, annual: 159 },
            desc: "For brokers serious about scaling",
            popular: true,
            features: [
                "Unlimited active clients",
                "Full visual pipeline manager",
                "Payment tracker + auto-reminders",
                "50GB document vault",
                "WhatsApp reminder integration (coming Q2)",
                "Priority support",
            ],
            cta: "Request Access",
            ctaHref: "/demo",
            ctaVariant: "default" as const,
        },
        {
            name: "COMPANY",
            price: { monthly: 799, annual: 639 },
            desc: "For brokerages managing teams",
            features: [
                "Everything in Professional",
                "Up to 20 brokers",
                "Company admin dashboard",
                "Team deal visibility",
                "Broker performance reports",
                "Dedicated onboarding session",
            ],
            cta: "Contact Sales",
            ctaHref: "/demo?plan=company",
            ctaVariant: "outline" as const,
        }
    ];

    return (
        <SectionWrapper id="pricing" className="bg-bg-primary pt-24 pb-32">
            <div className="max-w-[1280px] mx-auto px-6">

                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: prefersReduced ? 1 : 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={prefersReduced ? { duration: 0 } : { duration: 0.6 }}
                    >
                        <span className="text-gold-primary text-xs tracking-[0.2em] font-mono uppercase mb-4 block">Pricing</span>
                        <h2 className="font-display text-[40px] md:text-[52px] leading-tight mb-4">
                            Simple, transparent pricing.
                        </h2>
                        <p className="text-text-secondary text-lg mb-12">No hidden fees. No setup costs. Cancel anytime.</p>

                        <PricingToggle onToggle={(b) => setBilling(b)} billing={billing} />
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-center mb-16">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            className={`bg-bg-card rounded-2xl border ${plan.popular ? 'border-gold-primary shadow-gold scale-[1.02] z-10 p-10 bg-gradient-to-b from-gold-primary/5 to-bg-card relative' : 'border-border-default hover:border-border-active p-8 z-0 transition-colors shadow-sm'}`}
                            initial={{ opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={prefersReduced ? { duration: 0 } : { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <Badge className="bg-gold-primary text-bg-primary uppercase tracking-widest text-[10px] pb-[3px] shadow-[0_0_15px_rgba(201,169,110,0.5)] border-gold-primary">
                                        Most Popular
                                    </Badge>
                                </div>
                            )}

                            <h3 className={`font-mono tracking-widest uppercase text-sm mb-4 ${plan.popular ? 'text-gold-primary font-bold' : 'text-text-muted mt-2'}`}>
                                {plan.name}
                            </h3>

                            <div className="mb-2 h-[48px] overflow-hidden relative">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={billing}
                                        initial={{ y: -20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 20, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute inset-0 flex items-baseline gap-2"
                                    >
                                        {plan.price[billing] === 0 ? (
                                            <span className="font-display text-4xl font-semibold">Free</span>
                                        ) : (
                                            <>
                                                <span className="font-display text-4xl font-semibold">AED {plan.price[billing]}</span>
                                                <span className="text-text-muted text-sm font-medium">/month</span>
                                            </>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <p className="text-sm text-text-secondary h-10 mb-6">{plan.desc}</p>

                            <ul className="flex flex-col gap-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-text-primary">
                                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${plan.popular ? 'text-gold-primary' : 'text-text-muted'}`} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button asChild variant={plan.ctaVariant} size="lg" className="w-full mt-auto">
                                <Link href={plan.ctaHref}>
                                    {plan.cta}
                                </Link>
                            </Button>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Trust Icons */}
                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between text-center gap-6">
                    <div className="text-sm text-text-muted w-full md:w-auto md:text-left">
                        <span className="text-text-primary font-medium">All plans include 14-day free trial.</span> No credit card required to start.
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 w-full md:w-auto">
                        {[
                            { icon: ShieldCheck, text: "Secure" },
                            { icon: MapPin, text: "UAE-based" },
                            { icon: PhoneCall, text: "Local support" },
                            { icon: Zap, text: "Setup in 48hrs" },
                            { icon: RotateCcw, text: "Cancel anytime" },
                        ].map((trust, i) => (
                            <div key={i} className="flex items-center gap-2 text-text-muted text-xs uppercase tracking-wider font-semibold">
                                <trust.icon className="w-4 h-4 text-gold-primary/50" />
                                {trust.text}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
}
