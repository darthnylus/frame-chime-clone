import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const words = ["From", "still", "frames", "to", "motion", "and", "beyond"];

const HeroSection = () => {
  const scrollToMain = () => {
    document.getElementById("main-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20">
      {/* Decorative floating images */}
      <motion.img
        src="https://cdn.prod.website-files.com/685a9f9823de56a2cad0285d/68fa01c31a73c1c38136116a_image%20(45)%20(1).webp"
        alt="Abstract green figure"
        className="absolute top-[15%] right-[10%] w-48 md:w-64 opacity-40 pointer-events-none"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ duration: 1.2, delay: 1 }}
      />
      <motion.img
        src="https://cdn.prod.website-files.com/685a9f9823de56a2cad0285d/68fa01521b5e1697f8909abe_image%20(43)%20(1).webp"
        alt="Abstract green figure"
        className="absolute bottom-[20%] left-[5%] w-40 md:w-56 opacity-30 pointer-events-none"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.3, y: 0 }}
        transition={{ duration: 1.2, delay: 1.3 }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-8"
      >
        Works
      </motion.div>

      <h1 className="font-display font-semibold text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] max-w-5xl">
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
            {i === 3 && <br className="hidden md:block" />}
            <motion.span
              className="inline-block"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.3 + i * 0.08,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.button
        onClick={scrollToMain}
        className="absolute bottom-10 right-6 md:right-12 lg:right-20 flex items-center gap-2 text-muted-foreground text-sm tracking-wide hover:text-foreground transition-colors cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        Scroll down
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.span>
      </motion.button>
    </section>
  );
};

export default HeroSection;
