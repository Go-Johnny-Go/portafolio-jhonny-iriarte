
import { FaInstagram } from "react-icons/fa";

const About = ({ isEnglish }) => {
  return (
    <section id="about">
      <div className="container px-5  mx-auto">
        <div className="text-center mb-10 p-5 md:p-10 lg:p-20">
          <FaInstagram className="w-10 h-10 inline-block mb-4 text-cyan-400" />
          <h1 className={`font-new sm:text-4xl text-3xl font-bold text-red-600 mb-4 ${isEnglish ? "block" : "hidden"}`}>
            Full Stack Developer
          </h1>
          <h1 className={` font-new sm:text-4xl text-3xl font-bold text-red-600 mb-4 ${isEnglish ? "hidden" : "block"}`}>
            Desarrollador Full Stack
          </h1>
          <p className={`text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto ${isEnglish ? "block" : "hidden"}`}>
            Hi, my name is Jhonny, and this is a little bit about how I became a full-stack programmer. I started my foray into technology when I was 12 years old in a technological institute by taking courses in electronics and computer networks. My first teachers were YouTube, the Platzi platform and Udemy. Eventually, I made the decision to embark on a professional career as a full-stack programmer through the Academlo bootcamp.
          </p>
          <p className={`text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto ${isEnglish ? "hidden" : "block"}`}>
            Hola, mi nombre es Jhonny, y esto es un poco acerca de cómo me convertí en un programador full-stack. Comencé mi incursión en la tecnología a los 12 años en un instituto tecnológico tomando cursos de electrónica y redes informáticas. Mis primeros maestros fueron YouTube, la plataforma Platzi y Udemy. Finalmente, tomé la decisión de embarcarme en una carrera profesional como programador full-stack a través del bootcamp Academlo.
          </p>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mt-5">
            <span className={`text-cyan-400 ${isEnglish ? "block" : "hidden"}`}>Only fail when you stop trying</span>
            <span className={`text-cyan-400 ${isEnglish ? "hidden" : "block"}`}>Solo fallas cuando dejas de intentarlo</span>
            <br />
            - Jhonny Iriarte Condori
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
