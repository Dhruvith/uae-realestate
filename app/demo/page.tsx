"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { demoRequestSchema, DemoRequestFormValues } from "@/lib/validations";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useToast } from "@/components/ui/Toast";
import Link from "next/link";
import { CheckCircle2, Building2, MapPin, Users, Target } from "lucide-react";

export default function DemoPage() {
    const [isSuccess, setIsSuccess] = useState(false);
    const { toast } = useToast();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<DemoRequestFormValues>({
        resolver: zodResolver(demoRequestSchema),
        mode: "onBlur",
    });

    const onSubmit = async (data: DemoRequestFormValues) => {
        try {
            const response = await fetch("/api/demo-request", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                if (response.status === 429) {
                    toast("Too many requests. Please try again later.", "warning");
                } else if (result.errors) {
                    // handle specific server side validation errors if needed, though zod handles most
                    toast("Please check all fields and try again.", "error");
                } else {
                    toast(result.error || "Failed to submit request.", "error");
                }
                return;
            }

            setIsSuccess(true);
            reset();
            toast("Request submitted successfully!", "success");

        } catch (err) {
            toast("Network error. Please try again later.", "error");
        }
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md w-full bg-bg-card p-10 rounded-2xl border border-border-default shadow-card text-center"
                >
                    <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-8 h-8 text-success" />
                    </div>
                    <h1 className="font-display text-3xl mb-4 text-text-primary">Request Received</h1>
                    <p className="text-text-secondary mb-8 leading-relaxed">
                        Thank you for your interest in MyPropertyUAE. Our onboarding team has received your details and will contact you within 24 hours to schedule your demo.
                    </p>
                    <Button asChild className="w-full">
                        <Link href="/">Return to Home</Link>
                    </Button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-[1280px] mx-auto flex flex-col md:flex-row gap-16 md:gap-24">

            {/* Left Info Column */}
            <div className="w-full md:w-5/12 pt-4">
                <Link href="/" className="text-gold-primary text-sm mb-8 inline-flex items-center hover:underline">
                    ← Back to home
                </Link>
                <h1 className="font-display text-4xl md:text-5xl leading-tight mb-6">Request early access</h1>
                <p className="text-text-secondary text-lg mb-12">
                    We're currently onboarding select UAE brokerages to our early access program. Fill out the form to request your invite.
                </p>

                <div className="flex flex-col gap-6">
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-gold-primary/10 flex items-center justify-center shrink-0">
                            <span className="text-gold-primary font-bold">1</span>
                        </div>
                        <div>
                            <h3 className="text-text-primary font-medium mb-1">Submit your details</h3>
                            <p className="text-text-muted text-sm">Tell us about your brokerage and current workflow challenges.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-gold-primary/10 flex items-center justify-center shrink-0">
                            <span className="text-gold-primary font-bold">2</span>
                        </div>
                        <div>
                            <h3 className="text-text-primary font-medium mb-1">Quick Discovery Call</h3>
                            <p className="text-text-muted text-sm">A 15-minute call to ensure we're the right fit for your needs.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-gold-primary/10 flex items-center justify-center shrink-0">
                            <span className="text-gold-primary font-bold">3</span>
                        </div>
                        <div>
                            <h3 className="text-text-primary font-medium mb-1">Full Platform Access</h3>
                            <p className="text-text-muted text-sm">Get onboarded within 48 hours and transform your deal management.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Form Column */}
            <div className="w-full md:w-7/12">
                <motion.div
                    className="bg-bg-card p-8 md:p-10 rounded-2xl border border-border-default shadow-card relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* subtle mesh bg */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold-primary/5 blur-3xl rounded-full mix-blend-screen pointer-events-none" />

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 relative z-10">
                        {/* Honeypot */}
                        <input type="text" {...register("website")} className="hidden" tabIndex={-1} autoComplete="off" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-text-secondary">Full Name</label>
                                <Input placeholder="Ahmed Qureshi" {...register("name")} error={!!errors.name} />
                                {errors.name && <span className="text-xs text-error font-medium">{errors.name.message}</span>}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-text-secondary">Work Email</label>
                                <Input type="email" placeholder="ahmed@brokerage.ae" {...register("email")} error={!!errors.email} />
                                {errors.email && <span className="text-xs text-error font-medium">{errors.email.message}</span>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-text-secondary">Phone Number</label>
                                <Input type="tel" placeholder="+971 50 123 4567" {...register("phone")} error={!!errors.phone} />
                                {errors.phone && <span className="text-xs text-error font-medium">{errors.phone.message}</span>}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-text-secondary">Company Name</label>
                                <Input placeholder="Luxury Properties LLC" {...register("company")} error={!!errors.company} />
                                {errors.company && <span className="text-xs text-error font-medium">{errors.company.message}</span>}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-text-secondary flex items-center gap-2">
                                <Building2 className="w-4 h-4" /> Brokerage Type
                            </label>
                            <select
                                {...register("brokerType")}
                                className={`flex h-12 w-full rounded-md border bg-black/40 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-primary ${errors.brokerType ? 'border-error' : 'border-border-default text-text-primary [&:not(:valid)]:text-text-muted'}`}
                                defaultValue=""
                            >
                                <option value="" disabled hidden>Select your setup...</option>
                                <option value="solo" className="bg-bg-card">Independent / Solo Broker</option>
                                <option value="small-team" className="bg-bg-card">Small Team (2-5 brokers)</option>
                                <option value="brokerage" className="bg-bg-card">Agency / Brokerage (6+ brokers)</option>
                            </select>
                            {errors.brokerType && <span className="text-xs text-error font-medium">{errors.brokerType.message}</span>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-text-secondary flex items-center gap-2">
                                    <MapPin className="w-4 h-4" /> Primary Location
                                </label>
                                <select
                                    {...register("location")}
                                    className={`flex h-12 w-full rounded-md border bg-black/40 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-primary ${errors.location ? 'border-error' : 'border-border-default text-text-primary [&:not(:valid)]:text-text-muted'}`}
                                    defaultValue=""
                                >
                                    <option value="" disabled hidden>Select emirate...</option>
                                    <option value="dubai" className="bg-bg-card">Dubai</option>
                                    <option value="abu-dhabi" className="bg-bg-card">Abu Dhabi</option>
                                    <option value="sharjah" className="bg-bg-card">Sharjah</option>
                                    <option value="northern" className="bg-bg-card">Northern Emirates</option>
                                    <option value="other" className="bg-bg-card">Other / Regional</option>
                                </select>
                                {errors.location && <span className="text-xs text-error font-medium">{errors.location.message}</span>}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-text-secondary flex items-center gap-2">
                                    <Users className="w-4 h-4" /> Active Clients / Month
                                </label>
                                <select
                                    {...register("clientCount")}
                                    className={`flex h-12 w-full rounded-md border bg-black/40 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-primary ${errors.clientCount ? 'border-error' : 'border-border-default text-text-primary [&:not(:valid)]:text-text-muted'}`}
                                    defaultValue=""
                                >
                                    <option value="" disabled hidden>Select volume...</option>
                                    <option value="1-5" className="bg-bg-card">1 - 5 clients</option>
                                    <option value="6-15" className="bg-bg-card">6 - 15 clients</option>
                                    <option value="16-30" className="bg-bg-card">16 - 30 clients</option>
                                    <option value="30+" className="bg-bg-card">30+ clients</option>
                                </select>
                                {errors.clientCount && <span className="text-xs text-error font-medium">{errors.clientCount.message}</span>}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-text-secondary flex items-center gap-2">
                                <Target className="w-4 h-4" /> What's your biggest challenge right now? <span className="text-text-muted font-normal">(Optional)</span>
                            </label>
                            <textarea
                                {...register("challenge")}
                                placeholder="e.g. Too much time spent chasing payments, messy whatsapp chats..."
                                className="flex min-h-[100px] w-full rounded-md border border-border-default bg-black/40 px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-primary resize-y"
                            />
                        </div>

                        <Button type="submit" size="lg" className="w-full mt-4" isLoading={isSubmitting}>
                            Request Access
                        </Button>
                        <p className="text-center text-xs text-text-muted mt-2">
                            By submitting, you agree to our Privacy Policy.
                        </p>
                    </form>
                </motion.div>
            </div>

        </div>
    );
}
