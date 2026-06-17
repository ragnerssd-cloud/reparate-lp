"use client";
import Image from "next/image";
import { NAV_LINKS, WHATSAPP_URL, CLINIC_INSTAGRAM } from "@/lib/constants";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1E2B26", padding: "4rem 0 2rem" }}>
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image src="/images/logo.jpeg" alt="Instituto Reparatè" fill className="object-cover" />
              </div>
              <span className="font-serif text-xl" style={{ color: "#F5F0EA", fontWeight: 300 }}>
                Reparatè
              </span>
            </div>
            <p className="text-sm" style={{ color: "rgba(245,240,234,0.5)", lineHeight: 1.8, fontWeight: 300 }}>
              Cirurgia plástica com segurança,<br />tecnologia e cuidado integral.
            </p>
            <p className="text-xs mt-4" style={{ color: "rgba(201,169,110,0.7)", lineHeight: 1.8 }}>
              Rua Otacílio Nepomuceno, 205 — Sala 602<br />
              <span className="uppercase tracking-wider">Campina Grande, PB</span>
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-5" style={{ color: "#6B8B7A", fontWeight: 500 }}>
              Navegação
            </p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(245,240,234,0.5)", fontWeight: 300 }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#A8C5B8")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(245,240,234,0.5)")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-5" style={{ color: "#6B8B7A", fontWeight: 500 }}>
              Contato
            </p>
            <div className="flex flex-col gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm"
                style={{ color: "rgba(245,240,234,0.6)", fontWeight: 300 }}
              >
                <span style={{ color: "#6B8B7A" }}>●</span>
                WhatsApp
              </a>
              <a
                href={`https://instagram.com/institutoreparate`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm"
                style={{ color: "rgba(245,240,234,0.6)", fontWeight: 300 }}
              >
                <span style={{ color: "#6B8B7A" }}>●</span>
                {CLINIC_INSTAGRAM}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{
            borderTop: "1px solid rgba(107,139,122,0.15)",
            color: "rgba(245,240,234,0.35)",
          }}
        >
          <p>© 2026 Instituto Reparatè. Todos os direitos reservados.</p>
          <p>Cirurgia Plástica · Campina Grande, PB</p>
        </div>
      </div>
    </footer>
  );
}
