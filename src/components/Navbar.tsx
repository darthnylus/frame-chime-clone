import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Origins", href: "#origins" },
  { label: "Civilizations", href: "#civilizations" },
  { label: "The Name", href: "#the-name" },
  { label: "Truth", href: "#truth" },
  { label: "Resources", href: "#resources" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="flex items-center h-14">
        {/* Active tab highlight */}
        <a
          href="#"
          className="bg-primary text-primary-foreground font-body font-medium text-sm tracking-wider uppercase px-8 h-full flex items-center"
        >
          Home
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center flex-1 justify-between px-2">
          {navItems.slice(1).map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground/70 hover:text-foreground text-sm tracking-wider uppercase transition-colors px-4 py-2"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden ml-auto mr-4 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            {navItems.slice(1).map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-6 py-3 text-sm tracking-wider uppercase text-foreground/70 hover:text-foreground hover:bg-secondary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
