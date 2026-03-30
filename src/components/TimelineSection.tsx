import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const timeline = [
  { org: "Nubia / Kush", role: "The Spine of the Ancient World", period: "~3500 BCE", desc: "More pyramids than Egypt. The world's first iron-smelting centre. Trade networks reaching into the Mediterranean." },
  { org: "Carthage", role: "Maritime Empire", period: "814 – 146 BCE", desc: "Controlled the western Mediterranean for centuries. Rome fought three wars and burned it to the ground to feel safe." },
  { org: "25th Dynasty", role: "Nubian Pharaohs Rule Egypt", period: "744 – 656 BCE", desc: "Dark-skinned kings from the south sat on the most famous throne in the ancient world for over a century." },
  { org: "The Moors", role: "Carriers of the Flame", period: "711 – 1492 CE", desc: "Built the most advanced civilization in Western Europe — libraries, street lighting, algebra, astronomy, medicine." },
];

const TimelineSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
      {/* Section header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
        <motion.h2
          className="font-display text-foreground text-5xl md:text-7xl lg:text-8xl uppercase"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Timeline
        </motion.h2>

        <motion.a
          href="#the-name"
          className="mt-6 md:mt-0 inline-flex items-center group"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="border border-foreground/30 text-foreground text-xs tracking-widest uppercase px-6 py-2.5 group-hover:bg-foreground/5 transition-colors">
            Learn More
          </span>
          <span className="bg-primary text-primary-foreground w-10 h-10 flex items-center justify-center">
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </motion.a>
      </div>

      {/* Timeline items — Avexis awards style */}
      <div className="space-y-0">
        {timeline.map((item, i) => (
          <motion.div
            key={item.org}
            className="border-t border-border py-8 grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-4 md:gap-8 items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div>
              <h3 className="font-display text-foreground text-xl md:text-2xl uppercase">{item.org}</h3>
              <p className="text-primary text-sm mt-1">{item.role}</p>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>

            <span className="text-foreground/40 text-sm tracking-wider font-display text-lg">{item.period}</span>
          </motion.div>
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  );
};

export default TimelineSection;
