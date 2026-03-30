import { motion } from "framer-motion";

interface StarDecorationProps {
  className?: string;
  size?: "sm" | "lg";
}

const StarDecoration = ({ className = "", size = "sm" }: StarDecorationProps) => {
  const dim = size === "lg" ? "w-6 h-6" : "w-3 h-3";

  return (
    <motion.div
      className={`${className} ${dim} text-foreground/20`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L12 24M0 12L24 12" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    </motion.div>
  );
};

export default StarDecoration;
