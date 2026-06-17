"use client";
import Image from "next/image";
import { DOCTORS } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function CorpoClinico() {
  return (
    <section id="equipe" style={{ backgroundColor: "#FFFFFF", padding: "6rem 0" }}>
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="section-eyebrow mb-4">Nossa Equipe</p>
          <h2 className="section-title mb-5">Corpo Clínico</h2>
          <div className="decorative-line mx-auto mb-6" />
          <p className="section-subtitle max-w-lg mx-auto">
            Especialistas com formação de excelência, dedicados à sua saúde e ao resultado que você merece.
          </p>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {DOCTORS.map((doctor, i) => (
            <AnimatedSection key={doctor.name} delay={i * 0.15}>
              <div
                className="overflow-hidden"
                style={{ border: "1px solid rgba(107,139,122,0.12)", borderRadius: "2px" }}
              >
                {/* Foto */}
                <div className="relative" style={{ height: "clamp(300px, 55vw, 420px)" }}>
                  <Image
                    src={doctor.photo}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: "center 15%" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(44,59,53,0.7) 0%, transparent 50%)",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-serif text-2xl" style={{ color: "#FFFFFF", fontWeight: 300 }}>
                      {doctor.name}
                    </p>
                    <p className="text-xs uppercase tracking-widest mt-1" style={{ color: "#E5C896" }}>
                      {doctor.role}
                    </p>
                  </div>
                </div>
                {/* Info */}
                <div className="p-6" style={{ backgroundColor: "#F7F4EF" }}>
                  <p className="text-xs uppercase tracking-wider mb-3" style={{ color: "#8A8A8A" }}>
                    {doctor.crm}
                  </p>
                  <p className="text-sm" style={{ color: "#5A5A5A", lineHeight: 1.8, fontWeight: 300 }}>
                    {doctor.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
