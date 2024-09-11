import HeroSection from "@/components/hero-section/HeroSection";
import WorkSection from "@/components/work-section/WorkSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <HeroSection />
      <WorkSection />
    </div>
  );
}
