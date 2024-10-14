import HeroSection from "@/components/hero-section/HeroSection";
import SectionProcess from "@/components/section-process/SectionProcess";
import TestimonialsSection from "@/components/testimonials-section/TestimonialsSection";
import WhySection from "@/components/why-section/WhySection";
import WorkSection from "@/components/work-section/WorkSection";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <div className="flex flex-col gap-32">
      <HeroSection />
      <WorkSection />
      <TestimonialsSection />
      <WhySection />
      <SectionProcess />
    </div>
  );
}
