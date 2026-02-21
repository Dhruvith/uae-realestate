"use client";

import { motion, useReducedMotion } from "framer-motion";

export function TrustBar() {
    const prefersReduced = useReducedMotion();

    const logos = [
        "EMAAR",
        "DAMAC Properties",
        "Aldar",
        "Sobha Realty",
        "Meraas",
        "Nakheel",
        "Ellington",
        "Binghatti"
    ];

    return (
        <section className="py-12 bg-white/[0.02] border-y border-gold-primary/10 overflow-hidden relative backdrop-blur-sm">
            <div className="max-w-[1280px] mx-auto px-6 mb-8 text-center">
                <p className="text-text-muted text-xs uppercase tracking-[0.2em] font-medium">
                    Designed for brokers selling properties by
                </p>
            </div>

            <div className="relative flex w-full max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                <motion.div
                    className="flex shrink-0 w-max"
                    animate={{
                        x: prefersReduced ? 0 : ["0%", "-50%"]
                    }}
                    transition={
                        prefersReduced
                            ? { duration: 0 }
                            : {
                                duration: 40,
                                repeat: Infinity,
                                ease: "linear",
                                repeatType: "loop",
                            }
                    }
                >
                    {/* Double the logos array to seamlessly loop */}
                    {[...logos, ...logos].map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center min-w-[200px] px-8"
                        >
                            <span className="font-display font-medium text-xl text-text-muted opacity-60 uppercase tracking-widest whitespace-nowrap">
                                {logo}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
