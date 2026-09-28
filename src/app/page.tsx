import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SvgSprite from "@/components/SvgSprite";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import OurWork from "@/components/sections/OurWork";
import Values from "@/components/sections/Values";
import Partners from "@/components/sections/Partners";
import Questions from "@/components/sections/Questions";

export default function Home() {
  return (
    <div className="page">
      <SvgSprite />
      <Header />
      <Hero />
      <About />
      <OurWork />
      <Values />
      <Partners />
      <Questions />
      <Footer />
    </div>
  );
}
