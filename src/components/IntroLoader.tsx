import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IntroLoader = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {/* Decorative line expanding */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px bg-primary/40"
        initial={{ height: 0 }}
        animate={{ height: "30%" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Small star */}
      <motion.div
        className="absolute"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0.8] }}
        transition={{ duration: 2, times: [0, 0.3, 0.7, 1], ease: "easeInOut" }}
        style={{ top: "30%" }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" className="text-primary">
          <path
            d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
            fill="currentColor"
          />
        </svg>
      </motion.div>

      {/* Subtitle appears first */}
      <motion.p
        className="text-muted-foreground text-xs tracking-[0.35em] uppercase mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -5] }}
        transition={{ duration: 2.4, times: [0, 0.25, 0.65, 1], ease: "easeInOut" }}
      >
        Mother of Mankind
      </motion.p>

      {/* Main title with clip-path reveal */}
      <motion.h1
        className="font-display text-primary text-6xl md:text-8xl lg:text-9xl tracking-tight"
        initial={{ opacity: 0, clipPath: "inset(0 50% 0 50%)" }}
        animate={{
          opacity: [0, 1, 1, 1],
          clipPath: [
            "inset(0 50% 0 50%)",
            "inset(0 0% 0 0%)",
            "inset(0 0% 0 0%)",
            "inset(0 0% 0 0%)",
          ],
        }}
        transition={{ duration: 2.4, times: [0, 0.35, 0.7, 1], ease: [0.22, 1, 0.36, 1] as const }}
      >
        ALKEBULAN
      </motion.h1>

      {/* Horizontal line */}
      <motion.div
        className="h-px bg-primary/60 mt-6"
        initial={{ width: 0 }}
        animate={{ width: ["0px", "120px", "120px", "0px"] }}
        transition={{ duration: 2.4, times: [0, 0.35, 0.7, 1], ease: "easeInOut" }}
      />

      {/* Year tag */}
      <motion.p
        className="text-foreground/30 text-xs tracking-[0.2em] mt-4 font-display"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0.6, 0] }}
        transition={{ duration: 2.4, times: [0, 0.35, 0.7, 1] }}
      >
        @300,000 BCE
      </motion.p>

      {/* Bottom line */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px bg-primary/40"
        initial={{ height: 0 }}
        animate={{ height: "30%" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Trigger completion */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2.8 }}
        onAnimationComplete={onComplete}
      />
    </motion.div>
  );
};

export default IntroLoader;
