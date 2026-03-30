import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const civilizations = [
  {
    num: "01",
    title: "Nubia / Kush",
    subtitle: "The Spine of the Ancient World",
    description: "More pyramids than Egypt. Sharper. Older. Nubia was Egypt's equal — and at certain points, Egypt's ruler. The 25th Dynasty pharaohs were Nubian: dark-skinned kings from the south.",
    image: "https://images.unsplash.com/photo-1568322445389-f7e09b728dd4?w=800&q=80",
  },
  {
    num: "02",
    title: "Carthage",
    subtitle: "The City Rome Had to Erase",
    description: "A maritime empire controlling the western Mediterranean. Rome fought Carthage three times. Even after winning, Rome burned it to the ground and salted the earth.",
    image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=800&q=80",
  },
  {
    num: "03",
    title: "The Numidians",
    subtitle: "Masters of the Horse",
    description: "They rode without saddles, without bridles. When Hannibal crossed the Alps, Numidian cavalry did the most critical damage. King Jugurtha humiliated Rome for years.",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80",
  },
  {
    num: "04",
    title: "The Ethiopians",
    subtitle: "Beloved of the Gods",
    description: "Homer described them as people so righteous that the gods of Olympus themselves would come down to feast among them. The Aksumite Empire minted gold coins.",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80",
  },
  {
    num: "05",
    title: "The Moors",
    subtitle: "Carrying the Flame Forward",
    description: "Crossed into Europe in 711 CE and built a civilization that made everything around it look primitive. Street lighting, 200,000+ books in libraries, advanced medicine.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
  },
];

const CivilizationsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="civilizations" className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
      {/* Section header — Avexis style */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
        <motion.h2
          className="font-display text-foreground text-5xl md:text-7xl lg:text-8xl uppercase"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ancient Kingdoms
        </motion.h2>

        <motion.a
          href="#the-name"
          className="mt-6 md:mt-0 inline-flex items-center group"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="border border-foreground/30 text-foreground text-xs tracking-widest uppercase px-6 py-2.5 group-hover:bg-foreground/5 transition-colors">
            The Name
          </span>
          <span className="bg-primary text-primary-foreground w-10 h-10 flex items-center justify-center">
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </motion.a>
      </div>

      {/* Civilizations list — numbered like Avexis services */}
      <div className="space-y-0">
        {civilizations.map((civ, i) => (
          <motion.div
            key={civ.num}
            className="group border-t border-border py-8 md:py-10 flex flex-col md:flex-row md:items-center gap-6 cursor-pointer relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span className="text-primary font-display text-2xl md:text-3xl w-16 shrink-0">{civ.num}</span>

            <div className="flex-1">
              <h3 className="font-display text-foreground text-2xl md:text-4xl uppercase group-hover:text-primary transition-colors">
                {civ.title}
              </h3>
              <p className="text-muted-foreground text-sm mt-1">{civ.subtitle}</p>
            </div>

            <p className="hidden lg:block text-muted-foreground text-sm max-w-xs">{civ.description}</p>

            {/* Hover image reveal — like Avexis service image */}
            {hoveredIndex === i && (
              <motion.img
                src={civ.image}
                alt={civ.title}
                className="hidden md:block absolute right-48 top-1/2 -translate-y-1/2 w-48 h-32 object-cover z-10 pointer-events-none"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              />
            )}

            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
          </motion.div>
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  );
};

export default CivilizationsSection;
