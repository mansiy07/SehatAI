// ============================
// Components Import
// ============================

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

// Global CSS
import "./App.css";

function App() {

  return (

    <>

      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Statistics */}
      <Stats />

      {/* How It Works */}
      <HowItWorks />

      {/* User Reviews */}
      <Testimonials />

      {/* Footer */}
      <Footer />

    </>

  );

}

export default App;