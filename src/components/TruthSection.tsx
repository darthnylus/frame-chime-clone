import { motion } from "framer-motion";

const truths = [
  "The Greeks described this land as without cold, without horror — and even in that, they admitted this was a land of life and greatness",
  "The Numidians rode without saddles and made Rome bleed. King Jugurtha humiliated the most powerful empire on earth",
  "Carthage forced three massive wars — and Rome had to burn every stone to feel safe",
  "Nubia ruled Egypt. Dark-skinned kings from the south sat on the most famous throne in the ancient world",
  "Homer wrote that the gods of Olympus came down to feast among the people of this land",
  "The Moors lit the streets of Europe. They gave Europe its algebra, its medicine, its Renaissance",
  "Modern science confirms: every human being alive today traces their ancestry to this continent",
  "None of them called their home Africa. They called it Alkebulan: Mother of Mankind",
];

const TruthSection = () => {
  return (
    <section id="truth" className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <motion.h2
        className="font-display text-foreground text-5xl md:text-7xl lg:text-8xl uppercase"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        The Truth You Now Carry
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        {truths.map((truth, i) => (
          <motion.div
            key={i}
            className="border border-border p-6 md:p-8 hover:border-primary/30 transition-colors group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <span className="text-primary font-display text-lg">{String(i + 1).padStart(2, "0")}</span>
            <p className="text-foreground/80 text-sm leading-relaxed mt-3 group-hover:text-foreground transition-colors">
              {truth}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TruthSection;
