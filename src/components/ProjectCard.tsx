import { useState } from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  tags: string[];
  imagePrimary: string;
  imageSecondary: string;
  index: number;
}

const ProjectCard = ({ title, tags, imagePrimary, imageSecondary, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index % 2 === 0 ? 0 : 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary mb-4">
        <motion.img
          src={imagePrimary}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.img
          src={imageSecondary}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <h3 className="font-display font-semibold text-foreground text-lg md:text-xl tracking-wide uppercase mb-2">
        {title}
      </h3>

      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-muted-foreground border border-border px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
