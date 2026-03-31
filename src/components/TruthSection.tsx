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

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const TruthSection = () => {
  return (
    <section id="truth" className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <motion.h2
        className="font-display text-foreground text-5xl md:text-7xl lg:text-8xl uppercase"
        initial={{ opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" }}
        whileInView={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        The Truth You Now Carry
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {truths.map((truth, i) => (
          <motion.div
            key={i}
            className="border border-border p-6 md:p-8 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1"
            variants={card}
          >
            <span className="text-primary font-display text-lg">{String(i + 1).padStart(2, "0")}</span>
            <p className="text-foreground/80 text-sm leading-relaxed mt-3 group-hover:text-foreground transition-colors">
              {truth}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TruthSection;
