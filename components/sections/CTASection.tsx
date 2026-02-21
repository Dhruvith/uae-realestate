"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCallback } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { VideoBackground } from "@/components/ui/VideoBackground";
import { Lock } from "lucide-react";
import { demoRequestSchema } from "@/lib/validations";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export function CTASection() {
    const prefersReduced = useReducedMotion();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isValid },
    } = useForm({
        resolver: zodResolver(demoRequestSchema.pick({ name: true, email: true, phone: true })),
        mode: "onBlur",
    });

    const onSubmit = useCallback(async (data: any) => {
        // Navigate with partial data
        window.location.href = `/demo?name=${encodeURIComponent(data.name)}&email=${encodeURIComponent(data.email)}&phone=${encodeURIComponent(data.phone)}`;
    }, []);

    return (
        <SectionWrapper className="relative py-32 overflow-hidden bg-bg-primary">
            {/* VIDEO LAYER */}
            <VideoBackground
                src="/videos/cta-bg.mp4"
                preset="cta"
                showNoise={true}
            />

            <div className="max-w-[700px] mx-auto px-6 relative z-10">
                <motion.div
                    className="bg-black/60 backdrop-blur-xl border border-white/10 p-10 md:p-14 rounded-3xl shadow-2xl shadow-black/80 text-center"
                    initial={{ opacity: prefersReduced ? 1 : 0, scale: prefersReduced ? 1 : 0.95, y: prefersReduced ? 0 : 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="text-gold-primary text-xs tracking-[0.2em] font-mono uppercase mb-4 block animate-pulse">
                        Start Today
                    </span>
                    <h2 className="font-display text-[40px] md:text-[56px] leading-[1.1] tracking-tight mb-4 mx-auto font-medium">
                        Ready to run your deals like a professional?
                    </h2>
                    <p className="text-text-secondary text-base mb-10 max-w-sm mx-auto">
                        Join 200+ UAE brokers who've made the switch. Get access in 24 hours.
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 text-left">
                        <div className="flex flex-col gap-1">
                            <Input placeholder="Full Name" {...register("name")} error={!!errors.name} />
                            {errors.name && <span className="text-xs text-error ml-1 mt-1 font-medium">{errors.name.message as string}</span>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <Input type="email" placeholder="Email Address" {...register("email")} error={!!errors.email} />
                                {errors.email && <span className="text-xs text-error ml-1 mt-1 font-medium">{errors.email.message as string}</span>}
                            </div>
                            <div className="flex flex-col gap-1">
                                <Input type="tel" placeholder="Phone (+971)" {...register("phone")} error={!!errors.phone} />
                                {errors.phone && <span className="text-xs text-error ml-1 mt-1 font-medium">{errors.phone.message as string}</span>}
                            </div>
                        </div>

                        <Button
                            type="submit"
                            size="lg"
                            className="mt-2 text-base font-semibold tracking-wide"
                            isLoading={isSubmitting}
                        >
                            Request Demo Access
                        </Button>
                    </form>

                    <div className="flex items-center justify-center gap-2 mt-8 text-text-muted text-xs font-medium uppercase tracking-wider">
                        <Lock className="w-3.5 h-3.5 shrink-0" />
                        Your information is never shared or sold.
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
