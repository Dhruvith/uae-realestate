"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const links = [
    { name: "Platform", href: "/#features" },
    { name: "For Brokers", href: "/for-brokers" },
    { name: "Client Portal", href: "/client-portal" },
    { name: "Pricing", href: "/pricing" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 80);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl ${isScrolled
                    ? "bg-[#0A0C10]/80 border-b border-border-subtle shadow-lg"
                    : "bg-transparent border-b border-transparent"
                }`}
        >
            <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="font-display font-bold text-2xl flex items-baseline gap-1 relative group">
                    MyProperty<span className="font-mono text-[11px] text-gold-primary tracking-widest relative -top-3">UAE</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm text-text-secondary hover:text-text-primary transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-primary transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <Button asChild className="ml-4">
                        <Link href="/demo">Request Demo</Link>
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-text-primary"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-nav"
                    aria-label="Main menu"
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        id="mobile-nav"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden overflow-hidden bg-bg-card border-b border-border-default"
                    >
                        <nav className="flex flex-col p-6 gap-6">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg text-text-primary"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button asChild size="lg" className="w-full">
                                <Link href="/demo">Request Demo</Link>
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
