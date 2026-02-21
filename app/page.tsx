import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <TrustBar />
            <HowItWorks />
            <FeaturesSection />
            <StatsSection />
            <TestimonialsSection />
            <PricingSection />
            <CTASection />
        </>
    );
}
