"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20"
      style={{ backgroundColor: "#F7F4EF" }}
    >
      <div className="container-custom w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center py-16 md:py-0">

        {/* Left — Copy */}
        <div className="flex flex-col gap-7 order-2 md:order-1">
          {/* Eyebrow */}
          <motion.p {...fadeUp(0)} className="section-eyebrow">
            Cirurgia Plástica · Campina Grande, PB
          </motion.p>

          {/* H1 */}
          <motion.h1 {...fadeUp(0.1)} className="font-serif" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 300, lineHeight: 1.1, color: "#2A2A2A" }}>
            Excelência em<br />
            <span style={{ color: "#6B8B7A" }}>Cirurgia Plástica</span>
          </motion.h1>

          {/* Linha dourada */}
          <motion.div {...fadeUp(0.2)} className="decorative-line" />

          {/* Subtítulo */}
          <motion.p {...fadeUp(0.3)} className="section-subtitle max-w-lg">
            Transformando autoestima com segurança, tecnologia e atendimento personalizado. Cada procedimento, um compromisso com sua saúde e bem-estar.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar Avaliação →
            </a>
            <a href="#servicos" className="btn-secondary">
              Conhecer a Clínica ↓
            </a>
          </motion.div>

          {/* Badges de autoridade */}
          <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3 mt-2">
            {["Tecnologia VASER & PIEZO", "Equipe Especializada", "Acompanhamento Integral"].map((badge) => (
              <span
                key={badge}
                className="text-xs px-3 py-1.5 rounded-full"
                style={{
                  backgroundColor: "rgba(107,139,122,0.1)",
                  color: "#4A6B60",
                  border: "1px solid rgba(107,139,122,0.2)",
                  fontWeight: 500,
                  letterSpacing: "0.03em",
                }}
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right — Imagem */}
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative order-1 md:order-2"
          style={{ height: "clamp(260px, 55vw, 680px)" }}
        >
          {/* Imagem principal */}
          <div className="relative w-full h-full overflow-hidden" style={{ borderRadius: "2px" }}>
            <Image
              src="/images/casal.JPG"
              alt="Dr. Daniel Rolim e Dra. Marcela Tavares — Instituto Reparatè"
              fill
              priority
              className="object-cover"
              style={{ objectPosition: "center 15%" }}
            />
            {/* Overlay gradiente sutil */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to right, rgba(247,244,239,0.25) 0%, transparent 40%)",
              }}
            />
          </div>

          {/* Badge flutuante */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-4 left-4 md:bottom-8 md:-left-8"
            style={{
              backgroundColor: "#FFFFFF",
              boxShadow: "0 8px 32px rgba(107,139,122,0.15)",
              padding: "0.6rem 0.9rem",
              borderLeft: "3px solid #C9A96E",
            }}
          >
            <p className="font-serif text-base md:text-2xl" style={{ color: "#2A2A2A", fontWeight: 300 }}>
              2.000<span style={{ color: "#6B8B7A" }}>+</span>
            </p>
            <p className="uppercase tracking-wider mt-0.5" style={{ fontSize: "0.6rem", color: "#8A8A8A", fontWeight: 500 }}>
              Procedimentos Realizados
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ width: 1, height: 24, backgroundColor: "#C9A96E" }}
        />
      </motion.div>
    </section>
  );
}
