import { motion } from "framer-motion";

const quotes = [
  { text: "African history did not begin with slavery. It began with the beginning of human civilization itself — here, on this continent.", author: "Dr. Yosef Ben-Jochannan" },
  { text: "We did not receive our civilization from Greece and Rome. They received theirs from us — and then forgot to mention it.", author: "George G.M. James" },
  { text: "The African origin of Egyptian civilization is not a theory. It is documented. It is proven. What remains is for the world to accept it.", author: "Cheikh Anta Diop" },
];

const ScholarSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32 bg-card">
      <motion.h2
        className="font-display text-foreground text-5xl md:text-7xl lg:text-8xl uppercase text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Voices of Truth
      </motion.h2>

      <div className="max-w-3xl mx-auto mt-16 space-y-12">
        {quotes.map((q, i) => (
          <motion.blockquote
            key={i}
            className="border-l-2 border-primary pl-6 md:pl-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed italic">
              "{q.text}"
            </p>
            <cite className="text-primary text-sm not-italic mt-3 block">— {q.author}</cite>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
};

export default ScholarSection;
