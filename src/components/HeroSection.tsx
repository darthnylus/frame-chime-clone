import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import StarDecoration from "./StarDecoration";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-14 overflow-hidden">
      {/* Star decorations like Avexis */}
      <StarDecoration className="absolute top-[15%] left-[8%]" size="lg" />
      <StarDecoration className="absolute top-[20%] right-[12%]" size="sm" />
      <StarDecoration className="absolute bottom-[25%] left-[15%]" size="sm" />
      <StarDecoration className="absolute top-[18%] right-[25%]" size="lg" />
      <StarDecoration className="absolute bottom-[30%] right-[8%]" size="sm" />

      {/* Top left label */}
      <motion.div
        className="absolute top-20 left-6 md:left-12 text-muted-foreground text-xs tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Mother of Mankind
      </motion.div>

      {/* Top right year */}
      <motion.div
        className="absolute top-20 right-6 md:right-12 text-muted-foreground text-xs tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        @300,000 BCE
      </motion.div>

      {/* Main title */}
      <motion.h1
        className="font-display text-primary text-[clamp(4rem,15vw,14rem)] leading-[0.85] tracking-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      >
        ALKEBULAN
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-foreground/50 text-sm md:text-base tracking-[0.15em] uppercase mt-6 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        The name they buried · The truth they feared
      </motion.p>

      <motion.p
        className="text-muted-foreground text-sm md:text-base mt-4 max-w-md italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        Africa is not the real name of this land.
      </motion.p>

      {/* CTA Button — Avexis style */}
      <motion.a
        href="#origins"
        className="mt-10 inline-flex items-center group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <span className="border border-foreground/30 text-foreground text-sm tracking-widest uppercase px-8 py-3 group-hover:bg-foreground/5 transition-colors">
          Begin the Reckoning
        </span>
        <span className="bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center">
          <ArrowRight className="w-4 h-4" />
        </span>
      </motion.a>

      {/* Hero image */}
      <motion.div
        className="w-full max-w-5xl mt-16 mx-auto overflow-hidden"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <img
          src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&q=80"
          alt="African savanna at sunset"
          className="w-full h-[40vh] md:h-[50vh] object-cover"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
