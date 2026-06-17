import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Instituto Reparatè | Cirurgia Plástica em Campina Grande",
  description:
    "Excelência em cirurgia plástica estética e reparadora. Equipe especializada, tecnologia de ponta e atendimento humanizado em Campina Grande, PB.",
  keywords:
    "cirurgia plástica campina grande, lipoaspiração, abdominoplastia, mamoplastia, rinoplastia, Instituto Reparatè",
  openGraph: {
    title: "Instituto Reparatè | Cirurgia Plástica",
    description: "Excelência em cirurgia plástica com segurança, tecnologia e cuidado integral.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
