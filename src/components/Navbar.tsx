"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "#F7F4EF" : "transparent",
          boxShadow: scrolled ? "0 1px 20px rgba(107,139,122,0.08)" : "none",
        }}
      >
        <nav className="container-custom flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/images/logo.jpeg"
                alt="Instituto Reparatè"
                fill
                className="object-cover"
              />
            </div>
            <span
              className="font-serif text-xl tracking-wide"
              style={{ color: "#2A2A2A", fontWeight: 300 }}
            >
              Reparatè
            </span>
          </Link>

          {/* Links Desktop */}
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-xs uppercase tracking-widest transition-colors duration-200"
                  style={{ color: "#5A5A5A", fontWeight: 500 }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#6B8B7A")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "#5A5A5A")
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Desktop */}
          <div className="hidden lg:block">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs"
            >
              Agendar Avaliação
            </a>
          </div>

          {/* Hamburger Mobile */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span
              className="block w-6 h-px transition-all duration-300"
              style={{
                backgroundColor: "#2A2A2A",
                transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
              }}
            />
            <span
              className="block w-6 h-px transition-all duration-300"
              style={{
                backgroundColor: "#2A2A2A",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-px transition-all duration-300"
              style={{
                backgroundColor: "#2A2A2A",
                transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
              }}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-40 shadow-lg"
            style={{ backgroundColor: "#F7F4EF", borderBottom: "1px solid rgba(107,139,122,0.15)" }}
          >
            <div className="container-custom py-8 flex flex-col gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="text-sm uppercase tracking-widest"
                  style={{ color: "#2A2A2A", fontWeight: 500 }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs self-start mt-2"
              >
                Agendar Avaliação
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
