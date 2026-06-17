"use client";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Servicos() {
  return (
    <section id="servicos" style={{ backgroundColor: "#FFFFFF", padding: "6rem 0" }}>
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="section-eyebrow mb-4">O que oferecemos</p>
          <h2 className="section-title mb-5">
            Especialidades &<br />Procedimentos
          </h2>
          <div className="decorative-line mx-auto mb-6" />
          <p className="section-subtitle max-w-xl mx-auto">
            Atendimento multidisciplinar completo, do planejamento pré-cirúrgico ao acompanhamento pós-operatório.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <AnimatedSection key={service.category} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col h-full p-6 md:p-8"
                style={{
                  backgroundColor: "#F7F4EF",
                  border: "1px solid rgba(107,139,122,0.12)",
                  borderTop: `3px solid ${service.color}`,
                }}
              >
                {/* Icon + Category */}
                <div className="flex items-center gap-3 mb-6">
                  <span style={{ color: service.color, fontSize: "1.25rem" }}>{service.icon}</span>
                  <h3
                    className="font-serif"
                    style={{ fontSize: "1.25rem", fontWeight: 400, color: "#2A2A2A" }}
                  >
                    {service.category}
                  </h3>
                </div>

                {/* Procedures */}
                <ul className="flex flex-col gap-3 flex-1">
                  {service.procedures.map((proc) => (
                    <li
                      key={proc}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: "#5A5A5A", fontWeight: 300 }}
                    >
                      <span style={{ color: service.color, fontSize: "0.5rem" }}>●</span>
                      {proc}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
