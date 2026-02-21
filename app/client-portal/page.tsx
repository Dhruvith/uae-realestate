import { ClientPortalMockup } from "@/components/mockups/ClientPortalMockup";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = {
    title: "Client Portal | MyPropertyUAE",
    description: "Give your clients a premium, read-only view of their deals.",
};

export default function ClientPortalPage() {
    return (
        <>
            <div className="pt-32 pb-16 text-center max-w-3xl mx-auto px-6">
                <h1 className="font-display text-5xl md:text-6xl mb-6">A Premium Buying Experience</h1>
                <p className="text-text-secondary text-lg">
                    No more status update calls. Your clients get a beautiful, secure portal to see their property details, tracked payments, and document history.
                </p>
            </div>
            <div className="max-w-[1000px] mx-auto px-6 mb-24">
                <ClientPortalMockup className="h-[600px] shadow-2xl shadow-gold-primary/10 border-gold-primary/30" />
            </div>
            <CTASection />
        </>
    );
}
