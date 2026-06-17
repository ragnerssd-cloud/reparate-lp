"use client";
import { motion } from "framer-motion";
import { TECHNOLOGIES } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Tecnologias() {
  return (
    <section id="tecnologias" style={{ backgroundColor: "#F7F4EF", padding: "6rem 0" }}>
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <p className="section-eyebrow mb-4">Inovação & Precisão</p>
          <h2 className="section-title mb-5">
            Tecnologias<br />
            <span style={{ color: "#6B8B7A" }}>Avançadas</span>
          </h2>
          <div className="decorative-line mx-auto mb-6" />
          <p className="section-subtitle max-w-xl mx-auto">
            Equipamentos de última geração que garantem resultados mais precisos, seguros e com menor tempo de recuperação.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TECHNOLOGIES.map((tech, i) => (
            <AnimatedSection key={tech.name} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -3, boxShadow: "0 12px 40px rgba(107,139,122,0.12)" }}
                transition={{ duration: 0.2 }}
                className="p-6 h-full"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(107,139,122,0.1)",
                  borderRadius: "2px",
                }}
              >
                <h3
                  className="font-serif mb-3"
                  style={{ fontSize: "1.15rem", fontWeight: 400, color: "#2A2A2A" }}
                >
                  {tech.name}
                </h3>
                <p className="text-sm" style={{ color: "#5A5A5A", lineHeight: 1.8, fontWeight: 300 }}>
                  {tech.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Banner segurança */}
        <AnimatedSection className="mt-10">
          <div
            className="p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            style={{ backgroundColor: "#2C3B35", borderRadius: "2px" }}
          >
            <div>
              <p className="font-serif text-lg" style={{ color: "#E5C896", fontWeight: 300 }}>Bota Pneumática</p>
              <p className="text-xs mt-1" style={{ color: "rgba(245,240,234,0.6)" }}>Prevenção antitrombótica</p>
            </div>
            <div>
              <p className="font-serif text-lg" style={{ color: "#E5C896", fontWeight: 300 }}>PRINEO</p>
              <p className="text-xs mt-1" style={{ color: "rgba(245,240,234,0.6)" }}>Cola cirúrgica premium</p>
            </div>
            <div>
              <p className="font-serif text-lg" style={{ color: "#E5C896", fontWeight: 300 }}>Manta Térmica</p>
              <p className="text-xs mt-1" style={{ color: "rgba(245,240,234,0.6)" }}>Temperatura controlada</p>
            </div>
            <div>
              <p className="font-serif text-lg" style={{ color: "#E5C896", fontWeight: 300 }}>Fio Farpado</p>
              <p className="text-xs mt-1" style={{ color: "rgba(245,240,234,0.6)" }}>Suturas mais seguras</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
