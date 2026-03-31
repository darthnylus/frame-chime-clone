import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const FooterCTA = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const marqueeX = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const ctaScale = useTransform(scrollYProgress, [0.3, 0.7], [0.92, 1]);
  const ctaOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  return (
    <section ref={ref} className="px-6 md:px-12 lg:px-20 py-20 md:py-32 text-center">
      <div className="overflow-hidden mb-16">
        <motion.div className="flex whitespace-nowrap" style={{ x: marqueeX }}>
          {[...Array(4)].map((_, i) => (
            <span key={i} className="font-display text-foreground/5 text-[8rem] md:text-[12rem] uppercase mx-8">
              ALKEBULAN
            </span>
          ))}
        </motion.div>
      </div>

      <motion.h2
        className="font-display text-foreground text-4xl md:text-6xl lg:text-7xl uppercase max-w-4xl mx-auto"
        style={{ scale: ctaScale, opacity: ctaOpacity }}
      >
        The Mother of Mankind Does Not Apologize
      </motion.h2>

      <motion.p
        className="text-muted-foreground text-sm md:text-base mt-6 max-w-xl mx-auto"
        initial={{ opacity: 0, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        A name is an identity. A name is a history. Share this with someone who still thinks the name Africa is just a name.
      </motion.p>

      <motion.div
        className="mt-10 inline-flex items-center group"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <button
          onClick={() => {
            if (navigator.share) {
              navigator.share({ title: "Alkebulan", text: "Long before 'Africa' this land was called Alkebulan — Mother of Mankind.", url: window.location.href });
            }
          }}
          className="border border-foreground/30 text-foreground text-sm tracking-widest uppercase px-8 py-3 group-hover:bg-foreground/5 transition-colors"
        >
          Share This Truth
        </button>
        <span className="bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center cursor-pointer">
          <ArrowRight className="w-4 h-4" />
        </span>
      </motion.div>

      <div className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-muted-foreground text-xs tracking-wider">
        <span className="font-display text-foreground text-lg">ALKEBULAN</span>
        <span>Mother of Mankind · The Original Name</span>
        <span>Built with truth</span>
      </div>
    </section>
  );
};

export default FooterCTA;
