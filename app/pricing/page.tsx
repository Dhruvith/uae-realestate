import { PricingSection } from "@/components/sections/PricingSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = {
    title: "Pricing | MyPropertyUAE",
    description: "Simple, honest pricing for UAE brokers.",
};

export default function PricingPage() {
    return (
        <>
            <PricingSection />
            <CTASection />
        </>
    );
}
