import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import StarDecoration from "./StarDecoration";
import { useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 0.6]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-14 overflow-hidden">
      <StarDecoration className="absolute top-[15%] left-[8%]" size="lg" />
      <StarDecoration className="absolute top-[20%] right-[12%]" size="sm" />
      <StarDecoration className="absolute bottom-[25%] left-[15%]" size="sm" />
      <StarDecoration className="absolute top-[18%] right-[25%]" size="lg" />
      <StarDecoration className="absolute bottom-[30%] right-[8%]" size="sm" />

      <motion.div
        className="absolute top-20 left-6 md:left-12 text-muted-foreground text-xs tracking-wider"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Mother of Mankind
      </motion.div>

      <motion.div
        className="absolute top-20 right-6 md:right-12 text-muted-foreground text-xs tracking-wider"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        @300,000 BCE
      </motion.div>

      <motion.h1
        className="font-display text-primary text-[clamp(4rem,15vw,14rem)] leading-[0.85] tracking-tight"
        style={{ y: titleY }}
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        ALKEBULAN
      </motion.h1>

      <motion.p
        className="text-foreground/50 text-sm md:text-base tracking-[0.15em] uppercase mt-6 max-w-xl"
        style={{ y: subtitleY }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        The name they buried · The truth they feared
      </motion.p>

      <motion.p
        className="text-muted-foreground text-sm md:text-base mt-4 max-w-md italic"
        style={{ y: subtitleY }}
        initial={{ opacity: 0, filter: "blur(8px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        Africa is not the real name of this land.
      </motion.p>

      <motion.a
        href="#origins"
        className="mt-10 inline-flex items-center group"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        <span className="border border-foreground/30 text-foreground text-sm tracking-widest uppercase px-8 py-3 group-hover:bg-foreground/5 transition-colors">
          Begin the Reckoning
        </span>
        <span className="bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center">
          <ArrowRight className="w-4 h-4" />
        </span>
      </motion.a>

      <motion.div
        className="w-full max-w-5xl mt-16 mx-auto overflow-hidden"
        style={{ y: imageY }}
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1.2 }}
      >
        <div className="relative overflow-hidden">
          <motion.img
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&q=80"
            alt="African savanna at sunset"
            className="w-full h-[40vh] md:h-[50vh] object-cover"
            style={{ scale: imageScale }}
          />
          <motion.div
            className="absolute inset-0 bg-background"
            style={{ opacity: overlayOpacity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
