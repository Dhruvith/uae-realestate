import { CTASection } from "@/components/sections/CTASection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";

export const metadata = {
    title: "For Brokers | MyPropertyUAE",
    description: "Designed specifically for UAE off-plan brokers.",
};

export default function ForBrokersPage() {
    return (
        <>
            <div className="pt-32 pb-16 text-center max-w-3xl mx-auto px-6">
                <h1 className="font-display text-5xl md:text-6xl mb-6">Built for Brokers.</h1>
                <p className="text-text-secondary text-lg">
                    Stop scrambling for documents. Stop searching through WhatsApp history.
                    Everything you need to close more deals, beautifully organized.
                </p>
            </div>
            <FeaturesSection />
            <CTASection />
        </>
    );
}
