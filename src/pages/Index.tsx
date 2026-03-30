import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OriginsSection from "@/components/OriginsSection";
import CivilizationsSection from "@/components/CivilizationsSection";
import TimelineSection from "@/components/TimelineSection";
import TheNameSection from "@/components/TheNameSection";
import ScholarSection from "@/components/ScholarSection";
import TruthSection from "@/components/TruthSection";
import ResourcesSection from "@/components/ResourcesSection";
import FooterCTA from "@/components/FooterCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <OriginsSection />
      <CivilizationsSection />
      <TimelineSection />
      <TheNameSection />
      <ScholarSection />
      <TruthSection />
      <ResourcesSection />
      <FooterCTA />
    </div>
  );
};

export default Index;
