import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import IntroLoader from "@/components/IntroLoader";
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
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <IntroLoader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className={`min-h-screen bg-background ${loading ? "overflow-hidden h-screen" : ""}`}>
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
    </>
  );
};

export default Index;
