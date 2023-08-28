import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Navbar from "./components/navbar";
import PerfilPhoto from "./components/perfil";

function App() {
  return (
    <main className="bg-gray-900  text-gray-400 body-font">
      <Navbar/>
      <PerfilPhoto/>
      <About/>
      <Projects/>
      <Skills/>
      <Testimonials/>
      <Contact/>
    </main>
  );
}

export default App;
