import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const comparisons = [
  { africa: "Rooted in a Greek word describing absence — without cold, without horror", alkebulan: "Describes this land as the mother of all humanity — the beginning, the source" },
  { africa: "Centers the experience of outsiders looking in", alkebulan: "Centers the experience of the people who built and lived here" },
  { africa: "Names this land by what Europeans did not have to suffer here", alkebulan: "Names this land by what it gave to the entire world" },
  { africa: "A label placed on you by someone who conquered you", alkebulan: "A name given to you by the ancestors who built you" },
];

const TheNameSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const africaX = useTransform(scrollYProgress, [0, 0.5], [-40, 0]);
  const alkebulanX = useTransform(scrollYProgress, [0, 0.5], [40, 0]);

  return (
    <section id="the-name" ref={ref} className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <motion.h2
        className="font-display text-foreground text-5xl md:text-7xl lg:text-8xl uppercase text-center"
        initial={{ opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" }}
        whileInView={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        The Name
      </motion.h2>

      <motion.p
        className="text-muted-foreground text-center text-sm md:text-base max-w-2xl mx-auto mt-6 leading-relaxed"
        initial={{ opacity: 0, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        The Romans used the term <em>Africa</em> to describe one single province — a conquered region in northern Tunisia. Over time, one colonial label was dragged across millions of miles of ancient civilization.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-4xl mx-auto">
        <motion.div
          className="border border-border p-8 md:p-10"
          style={{ x: africaX }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-muted-foreground text-xs tracking-widest uppercase mb-4">The Imposed Name</div>
          <div className="font-display text-foreground/40 text-5xl md:text-6xl">AFRICA</div>
          <p className="text-muted-foreground text-sm mt-4">Greek: <em>a-</em> (without) + <em>phrike</em> (cold / horror)</p>
          <p className="text-muted-foreground/60 text-sm mt-2 italic">A land described in the absence of European suffering.</p>
        </motion.div>

        <motion.div
          className="border border-primary/40 bg-primary/5 p-8 md:p-10"
          style={{ x: alkebulanX }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-primary text-xs tracking-widest uppercase mb-4">The True Name</div>
          <div className="font-display text-primary text-5xl md:text-6xl">ALKEBULAN</div>
          <p className="text-foreground/80 text-sm mt-4 font-semibold">Mother of Mankind.</p>
          <p className="text-foreground/60 text-sm mt-2 italic">The Beginning. The Source. Garden of Eden.</p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto mt-12 space-y-0">
        <div className="grid grid-cols-2 gap-6 border-b border-border pb-3">
          <div className="text-xs tracking-widest uppercase text-muted-foreground">AFRICA</div>
          <div className="text-xs tracking-widest uppercase text-primary">ALKEBULAN</div>
        </div>
        {comparisons.map((row, i) => (
          <motion.div
            key={i}
            className="grid grid-cols-2 gap-6 border-b border-border py-5"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-muted-foreground/60 text-sm">{row.africa}</p>
            <p className="text-foreground/80 text-sm">{row.alkebulan}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TheNameSection;
