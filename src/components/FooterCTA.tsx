import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FooterCTA = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32 text-center">
      {/* Marquee text */}
      <div className="overflow-hidden mb-16">
        <motion.div
          className="flex whitespace-nowrap animate-marquee"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="font-display text-foreground/5 text-[8rem] md:text-[12rem] uppercase mx-8">
              ALKEBULAN
            </span>
          ))}
        </motion.div>
      </div>

      <motion.h2
        className="font-display text-foreground text-4xl md:text-6xl lg:text-7xl uppercase max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        The Mother of Mankind Does Not Apologize
      </motion.h2>

      <motion.p
        className="text-muted-foreground text-sm md:text-base mt-6 max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
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

      {/* Footer bottom */}
      <div className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-muted-foreground text-xs tracking-wider">
        <span className="font-display text-foreground text-lg">ALKEBULAN</span>
        <span>Mother of Mankind · The Original Name</span>
        <span>Built with truth</span>
      </div>
    </section>
  );
};

export default FooterCTA;
