import { motion } from "framer-motion";

const resources = [
  { tag: "Foundation", title: "Africa: Mother of Western Civilization", author: "Dr. Yosef Ben-Jochannan" },
  { tag: "Essential", title: "Stolen Legacy", author: "George G.M. James" },
  { tag: "Comprehensive", title: "Introduction to African Civilizations", author: "John G. Jackson" },
  { tag: "Scientific", title: "The African Origin of Civilization", author: "Cheikh Anta Diop" },
  { tag: "Historical", title: "Destruction of Black Civilization", author: "Chancellor Williams" },
  { tag: "Archaeological", title: "They Came Before Columbus", author: "Ivan Van Sertima" },
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <motion.h2
        className="font-display text-foreground text-5xl md:text-7xl lg:text-8xl uppercase"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Further Reading
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
        {resources.map((res, i) => (
          <motion.div
            key={res.title}
            className="border border-border p-6 hover:border-primary/30 transition-colors group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <span className="text-primary text-xs tracking-widest uppercase">{res.tag}</span>
            <h3 className="font-display text-foreground text-xl md:text-2xl uppercase mt-3 group-hover:text-primary transition-colors">
              {res.title}
            </h3>
            <p className="text-muted-foreground text-sm mt-2">{res.author}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ResourcesSection;
