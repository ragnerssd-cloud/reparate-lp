"use client";
import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function CTAFinal() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #2C3B35 0%, #3D5249 100%)",
        padding: "7rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Elemento decorativo */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-5"
        style={{
          background: "radial-gradient(circle, #C9A96E 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="container-custom text-center relative z-10">
        <AnimatedSection>
          <p className="section-eyebrow mb-6" style={{ color: "#A8C5B8" }}>
            Dê o primeiro passo
          </p>
          <h2
            className="font-serif mb-6"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 300,
              color: "#F5F0EA",
              lineHeight: 1.2,
            }}
          >
            Sua transformação<br />
            <span style={{ color: "#E5C896" }}>começa com uma decisão.</span>
          </h2>
          <div className="decorative-line mx-auto mb-8" style={{ backgroundColor: "#C9A96E" }} />
          <p
            className="text-base mb-10 mx-auto"
            style={{ color: "rgba(245,240,234,0.7)", maxWidth: "520px", lineHeight: 1.8, fontWeight: 300 }}
          >
            Agende sua avaliação e descubra o planejamento ideal para seus objetivos, com segurança, conforto e acompanhamento especializado.
          </p>
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-3 px-10 py-4 text-sm uppercase tracking-widest font-medium"
            style={{
              backgroundColor: "#C9A96E",
              color: "#2A2A2A",
              borderRadius: "1px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Agendar pelo WhatsApp
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
