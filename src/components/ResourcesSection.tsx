import { motion } from "framer-motion";

const resources = [
  { tag: "Foundation", title: "Africa: Mother of Western Civilization", author: "Dr. Yosef Ben-Jochannan" },
  { tag: "Essential", title: "Stolen Legacy", author: "George G.M. James" },
  { tag: "Comprehensive", title: "Introduction to African Civilizations", author: "John G. Jackson" },
  { tag: "Scientific", title: "The African Origin of Civilization", author: "Cheikh Anta Diop" },
  { tag: "Historical", title: "Destruction of Black Civilization", author: "Chancellor Williams" },
  { tag: "Archaeological", title: "They Came Before Columbus", author: "Ivan Van Sertima" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const card = {
  hidden: { opacity: 0, y: 25, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const ResourcesSection = () => {
  return (
    <section id="resources" className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <motion.h2
        className="font-display text-foreground text-5xl md:text-7xl lg:text-8xl uppercase"
        initial={{ opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" }}
        whileInView={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        Further Reading
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {resources.map((res) => (
          <motion.div
            key={res.title}
            className="border border-border p-6 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1"
            variants={card}
          >
            <span className="text-primary text-xs tracking-widest uppercase">{res.tag}</span>
            <h3 className="font-display text-foreground text-xl md:text-2xl uppercase mt-3 group-hover:text-primary transition-colors">
              {res.title}
            </h3>
            <p className="text-muted-foreground text-sm mt-2">{res.author}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ResourcesSection;
