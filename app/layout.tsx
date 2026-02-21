import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ToastProvider } from "@/components/ui/Toast";
import "./globals.css";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-display",
    display: "swap",
    weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
    subsets: ["latin"],
    variable: "--font-body",
    display: "swap",
    weight: ["400", "500", "700"],
});

const dmMono = DM_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    display: "swap",
    weight: ["400", "500"],
});

export const metadata: Metadata = {
    title: "MyPropertyUAE | Deal Management Platform for UAE Brokers",
    description: "The only deal management platform built exclusively for UAE off-plan property brokers. Stop WhatsApp chaos, manage payments, and close more deals.",
    metadataBase: new URL("https://mypropertyuae.com"),
};

export const viewport: Viewport = {
    themeColor: "#0A0C10",
    colorScheme: "dark",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark" suppressHydrationWarning>
            <body className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable} font-body bg-bg-primary text-text-primary antialiased flex flex-col min-h-screen relative`}>
                <Navbar />
                <ToastProvider>
                    <main className="flex-1" id="main-content">
                        {children}
                    </main>
                </ToastProvider>
                <Footer />
                <Analytics />
                <SpeedInsights />

                {/* Skip to main content for accessibility */}
                <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[9999] bg-gold-primary text-bg-primary px-4 py-2 font-bold rounded">
                    Skip to content
                </a>
            </body>
        </html>
    );
}
