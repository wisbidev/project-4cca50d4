import HeroSection from "@/components/HeroSection";
import PipelineSection from "@/components/PipelineSection";
import AIAgentsSection from "@/components/AIAgentsSection";
import FeaturesSection from "@/components/FeaturesSection";
import TechStackSection from "@/components/TechStackSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <PipelineSection />
      <AIAgentsSection />
      <FeaturesSection />
      <TechStackSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
