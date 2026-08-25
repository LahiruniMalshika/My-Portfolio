import { About } from "./components/About";
import { Achievements } from "./components/Achievements";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Services />
        <Skills />
        <Projects />
        <Achievements />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
