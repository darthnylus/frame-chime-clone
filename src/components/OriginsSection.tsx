import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const OriginsSection = () => {
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const img1Y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const img2Y = useTransform(scrollYProgress, [0, 1], [60, -30]);

  return (
    <section id="origins" className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.div
            className="w-12 h-12 rounded-full border border-primary flex items-center justify-center mb-8"
            variants={fadeUp}
          >
            <span className="text-primary text-lg">✦</span>
          </motion.div>

          <motion.p
            className="text-foreground/60 text-base md:text-lg leading-relaxed max-w-xl"
            variants={fadeUp}
          >
            This land — the oldest land on the face of this earth — had a name before Rome existed. Had a name before Greece was a civilization. Had a name when the rest of the world was still figuring out how to survive. <strong className="text-foreground">This is a reckoning.</strong>
          </motion.p>

          <motion.a
            href="#civilizations"
            className="mt-8 inline-flex items-center group"
            variants={fadeUp}
          >
            <span className="border border-foreground/30 text-foreground text-xs tracking-widest uppercase px-6 py-2.5 group-hover:bg-foreground/5 transition-colors">
              Explore Civilizations
            </span>
            <span className="bg-primary text-primary-foreground w-10 h-10 flex items-center justify-center">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </motion.a>
        </motion.div>

        <div ref={imgRef} className="grid grid-cols-2 gap-3">
          <motion.div style={{ y: img1Y }} className="overflow-hidden">
            <motion.img
              src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=600&q=80"
              alt="Ancient African landscape"
              className="w-full h-64 md:h-80 object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            />
          </motion.div>
          <motion.div style={{ y: img2Y }} className="mt-8 overflow-hidden">
            <motion.img
              src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80"
              alt="African heritage"
              className="w-full h-64 md:h-80 object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.9 }}
            />
          </motion.div>
        </div>
      </div>

      {/* Stats bar with stagger */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {[
          { value: "300,000+", label: "Years of civilization" },
          { value: "6", label: "Ancient civilizations explored" },
          { value: "814 BCE", label: "Carthage founded" },
          { value: "400,000+", label: "Books in Moorish libraries" },
        ].map((stat) => (
          <motion.div key={stat.label} variants={fadeUp}>
            <div className="font-display text-primary text-3xl md:text-4xl">{stat.value}</div>
            <div className="text-muted-foreground text-xs tracking-wider uppercase mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default OriginsSection;
