import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NumbersBar from "@/components/NumbersBar";
import Servicos from "@/components/Servicos";
import Sobre from "@/components/Sobre";
import Tecnologias from "@/components/Tecnologias";
import CorpoClinico from "@/components/CorpoClinico";
import Jornada from "@/components/Jornada";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <NumbersBar />
      <Servicos />
      <Sobre />
      <Tecnologias />
      <CorpoClinico />
      <Jornada />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
