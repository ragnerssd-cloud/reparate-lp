"use client";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Sobre() {
  return (
    <section id="sobre" style={{ backgroundColor: "#F7F4EF", padding: "6rem 0" }}>
      <div className="container-custom grid md:grid-cols-2 gap-16 items-center">

        {/* Imagem */}
        <AnimatedSection direction="left" className="relative order-1">
          <div className="relative overflow-hidden" style={{ height: "clamp(320px, 60vw, 520px)", borderRadius: "2px" }}>
            <Image
              src="/images/dr-daniel.JPG"
              alt="Dr. Daniel Rolim — Instituto Reparatè"
              fill
              className="object-cover"
              style={{ objectPosition: "center 20%" }}
            />
            {/* Card sobre valores */}
            <div
              className="absolute bottom-4 right-4 md:bottom-6 md:right-6 p-3 md:p-6"
              style={{
                backgroundColor: "rgba(44,59,53,0.92)",
                maxWidth: "180px",
              }}
            >
              <p className="font-serif text-sm md:text-lg" style={{ color: "#E5C896", fontWeight: 300 }}>
                "Cada paciente é único."
              </p>
              <p className="hidden md:block text-xs mt-2" style={{ color: "rgba(245,240,234,0.7)", lineHeight: 1.6 }}>
                Atendimento humanizado e personalizado em cada etapa da jornada.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Copy */}
        <AnimatedSection direction="right" delay={0.15} className="order-2">
          <p className="section-eyebrow mb-5">Sobre o Instituto</p>
          <h2 className="section-title mb-5">
            Cuidado Integral,<br />
            <span style={{ color: "#6B8B7A" }}>Resultado Duradouro</span>
          </h2>
          <div className="decorative-line mb-7" />
          <p className="section-subtitle mb-5">
            O Instituto Reparatè nasceu da missão de oferecer cirurgia plástica de alto padrão com atendimento verdadeiramente humanizado. Cada detalhe é pensado para que o paciente se sinta seguro, acolhido e confiante em cada etapa da sua jornada.
          </p>
          <p className="section-subtitle mb-8">
            Nossa equipe multidisciplinar, composta por cirurgiões plásticos, fisioterapeuta e nutricionista, trabalha de forma integrada para garantir não apenas resultados estéticos excepcionais, mas saúde, bem-estar e autoestima elevada.
          </p>

          {/* Valores */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { titulo: "Segurança", desc: "Protocolos rigorosos em todos os procedimentos" },
              { titulo: "Precisão", desc: "Tecnologia de ponta para resultados naturais" },
              { titulo: "Humanização", desc: "Atendimento personalizado e próximo" },
              { titulo: "Integridade", desc: "Honestidade e transparência em cada etapa" },
            ].map((v) => (
              <div key={v.titulo} className="p-4" style={{ borderLeft: "2px solid #C9A96E" }}>
                <p className="font-serif text-base" style={{ color: "#2A2A2A", fontWeight: 400 }}>
                  {v.titulo}
                </p>
                <p className="text-xs mt-1" style={{ color: "#8A8A8A", lineHeight: 1.6 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
