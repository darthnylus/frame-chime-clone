import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const ProjectsGrid = () => {
  return (
    <section id="main-section" className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <motion.p
        className="text-muted-foreground text-base md:text-lg max-w-3xl mb-16 md:mb-24 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Research and experimentation are key to our multidisciplinary approach.
        We continuously explore new creative and technical directions — here's
        a selection of what's come out of that journey.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-10 gap-y-12 md:gap-y-16">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            tags={project.tags}
            imagePrimary={project.imagePrimary}
            imageSecondary={project.imageSecondary}
            index={index}
          />
        ))}
      </div>

      <motion.div
        className="mt-16 md:mt-24 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <button className="text-foreground border border-border px-8 py-3 text-sm tracking-widest uppercase hover:bg-secondary transition-colors">
          See more
        </button>
      </motion.div>
    </section>
  );
};

export default ProjectsGrid;
