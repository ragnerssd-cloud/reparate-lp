"use client";
import { JOURNEY_STEPS, WHATSAPP_URL } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Jornada() {
  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "6rem 0" }}>
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <p className="section-eyebrow mb-4">Passo a Passo</p>
          <h2 className="section-title mb-5">
            Sua Jornada<br />
            <span style={{ color: "#6B8B7A" }}>de Transformação</span>
          </h2>
          <div className="decorative-line mx-auto" />
        </AnimatedSection>

        <div className="relative">
          {/* Linha vertical conectora */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{ backgroundColor: "rgba(107,139,122,0.15)" }}
          />

          <div className="flex flex-col gap-8">
            {JOURNEY_STEPS.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.1}>
                <div
                  className={`flex items-center gap-4 md:gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Conteúdo */}
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div
                      className={`p-6 ${i % 2 === 0 ? "md:ml-auto" : ""}`}
                      style={{
                        backgroundColor: "#F7F4EF",
                        border: "1px solid rgba(107,139,122,0.1)",
                        maxWidth: "380px",
                        borderRadius: "2px",
                      }}
                    >
                      <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#C9A96E", fontWeight: 600 }}>
                        Etapa {step.step}
                      </p>
                      <h3 className="font-serif text-xl mb-2" style={{ color: "#2A2A2A", fontWeight: 400 }}>
                        {step.title}
                      </h3>
                      <p className="text-sm" style={{ color: "#5A5A5A", lineHeight: 1.8, fontWeight: 300 }}>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Círculo central */}
                  <div
                    className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#6B8B7A", boxShadow: "0 0 0 4px rgba(107,139,122,0.15)" }}
                  >
                    <span className="font-serif text-sm" style={{ color: "#FFFFFF", fontWeight: 300 }}>
                      {step.step}
                    </span>
                  </div>

                  {/* Espaço oposto */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection className="text-center mt-16">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Iniciar Minha Jornada →
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
