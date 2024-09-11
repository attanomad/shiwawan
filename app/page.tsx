import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/hero-section/HeroSection";
import SectionCta from "@/components/section-cta/SectionCta";
import TestimonialsSection from "@/components/testimonials-section/TestimonialsSection";
import WhySection from "@/components/why-section/WhySection";
import WorkSection from "@/components/work-section/WorkSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <HeroSection />
      <WorkSection />
      <TestimonialsSection />
      <WhySection />
      <div>
        <SectionCta />
        <Footer />
      </div>
    </div>
  );
}
