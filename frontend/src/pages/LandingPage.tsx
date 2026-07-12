import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Problem from "../components/Problem";
import Solution from "../components/Solution";
import Features from "../components/Features";
import Roadmap from "../components/Roadmap";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Mission />
      <Problem />
      <Solution />
      <Features />
      <Roadmap />
      <FAQ />
      <Footer />
    </>
  );
}

export default LandingPage;