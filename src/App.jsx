import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import PerfilPhoto from "./components/perfil";
import { useState } from "react";


function App() {

  const [isEnglish, setIsEnglish] = useState(true);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <main className="bg-gray-900  text-gray-400 body-font">
      <Navbar isEnglish={isEnglish} toggleLanguage={toggleLanguage} />
      <PerfilPhoto isEnglish={isEnglish} />
      <About isEnglish={isEnglish}/>
      <Projects isEnglish={isEnglish}/>
      <Skills isEnglish={isEnglish}/>
      <Testimonials isEnglish={isEnglish}/>
      <Contact isEnglish={isEnglish}/>
    </main>
  );
}

export default App;
