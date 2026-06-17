"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ backgroundColor: "#F7F4EF", padding: "6rem 0" }}>
      <div className="container-custom max-w-3xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="section-eyebrow mb-4">Tire suas dúvidas</p>
          <h2 className="section-title mb-5">Perguntas Frequentes</h2>
          <div className="decorative-line mx-auto" />
        </AnimatedSection>

        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.07}>
              <div
                className="overflow-hidden"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(107,139,122,0.12)",
                  borderRadius: "2px",
                }}
              >
                <button
                  className="w-full text-left p-6 flex items-center justify-between gap-4"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span
                    className="font-serif text-base"
                    style={{ color: "#2A2A2A", fontWeight: 400, lineHeight: 1.4 }}
                  >
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-xl flex-shrink-0"
                    style={{ color: "#6B8B7A", lineHeight: 1 }}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p
                        className="px-6 pb-6 text-sm"
                        style={{ color: "#5A5A5A", lineHeight: 1.8, fontWeight: 300 }}
                      >
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
