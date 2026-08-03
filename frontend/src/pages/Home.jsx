// ==========================================
// Home Page
// ==========================================

// Components

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SymptomChecker from "../components/SymptomChecker";
import Features from "../components/Features";
import Stats from "../components/Stats";
import HowItWorks from "../components/HowItWorks";
import Services from "../components/Services";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {

  return (

    <>

      <Navbar />

      <Hero />

      {/* Main AI Feature */}

      <SymptomChecker />

      <Features />

      <Stats />

      <HowItWorks />

      <Services />

      <About />

      <Testimonials />

      <Contact />

      <Footer />

    </>

  );

}

export default Home;