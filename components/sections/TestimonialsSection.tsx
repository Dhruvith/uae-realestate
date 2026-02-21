"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function TestimonialsSection() {
    const prefersReduced = useReducedMotion();

    const testimonials = [
        {
            quote: "Before MyPropertyUAE, I managed 30 clients across 5 WhatsApp groups and three Excel sheets. Now everything is one place.",
            author: "Khalid Al Mansoori",
            role: "Senior Broker",
            location: "Dubai",
            initials: "KA",
            gradient: "from-gold-primary via-gold-dark to-gold-primary"
        },
        {
            quote: "My clients trust me more now. They can see their deal status and documents any time. They stop worrying. I close faster.",
            author: "Priya Nair",
            role: "Independent Broker",
            location: "Abu Dhabi",
            initials: "PN",
            gradient: "from-bg-secondary via-border-default to-bg-secondary"
        },
        {
            quote: "The company dashboard changed how I run my team. I see every broker's pipeline and step in before anything goes wrong.",
            author: "Ahmed Qureshi",
            role: "Brokerage Director",
            location: "Sharjah",
            initials: "AQ",
            gradient: "from-border-default via-[#2A3441] to-border-default"
        }
    ];

    return (
        <SectionWrapper id="testimonials" className="bg-bg-primary pt-12">
            <div className="max-w-[1280px] mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testi, i) => (
                        <motion.div
                            key={i}
                            className="bg-bg-card p-8 rounded-xl border border-border-default relative hover:border-gold-primary/30 transition-colors shadow-sm cursor-default"
                            initial={{ opacity: prefersReduced ? 1 : 0, x: prefersReduced ? 0 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Quote className="absolute top-6 right-6 w-12 h-12 text-gold-primary opacity-5" />
                            <p className="font-display text-lg text-text-primary italic leading-relaxed mb-8 relative z-10">"{testi.quote}"</p>

                            <div className="flex items-center gap-4 relative z-10">
                                <div className={`w-12 h-12 rounded-full bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] ${testi.gradient} p-[2px]`}>
                                    <div className="w-full h-full bg-bg-card rounded-full flex items-center justify-center font-display text-text-primary text-sm font-bold">
                                        {testi.initials}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-medium text-text-primary">{testi.author}</h4>
                                    <p className="text-text-muted text-xs">{testi.role} · {testi.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </SectionWrapper>
    );
}
