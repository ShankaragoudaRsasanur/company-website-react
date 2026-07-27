import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Stats from "../components/Stats";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Stats />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;