import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import PorQueElegirnos from "./components/PorQueElegirnos";
import Testimonios from "./components/Testimonios";
import Cobertura from "./components/Cobertura";
import FAQ from "./components/FAQ";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import StickyCallBar from "./components/StickyCallBar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Servicios />
      <PorQueElegirnos />
      <Testimonios />
      <Cobertura />
      <FAQ />
      <Contacto />
      <Footer />

      <WhatsAppButton />
      <StickyCallBar />
    </>
  );
}

export default App;
