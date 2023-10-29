import { BiBookmark } from "react-icons/bi";
import { BsTranslate } from "react-icons/bs";
import BotonTraduccion from "./BotonTraduccion";


const Navbar = ( { isEnglish , toggleLanguage  }) => {


    return(
        <header className="bg-gray-800 md:sticky top-0 z-20">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className=" flex  items-center title-font font-medium text-white mb-4 md:mb-0">
            <img src="/perfil-photo.png" alt="My logo" className="h-10 w-10 rounded-full" />
            <a href="#about" className="ml-3 text-xl text-green-400 font-bold">
            JHONNY IRIARTE
            </a>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <a href="#projects"  className={`mr-5 hover:text-white ${isEnglish ? "block" : "hidden"}`}>
              Projects
            </a>
            <a href="#projects"  className={`mr-5 hover:text-white ${isEnglish ? "hidden" : "block"}`}>
              Proyectos
            </a>
            <a href="#skills" className={`mr-5 hover:text-white  ${isEnglish ? "block" : "hidden"} `}>
              Kills & Technologies
            </a>
            <a href="#skills" className={`mr-5 hover:text-white ${isEnglish ? "hidden" : "block"}`} >
              Habilidades y Tecnologias
            </a>
            <a href="#testimonials" className={`mr-5 hover:text-white ${isEnglish ? "block" : "hidden"}`}>
              Clients
            </a>
            <a href="#testimonials" className={`mr-5 hover:text-white ${isEnglish ? "hidden" : "block"}`}>
              Clientes
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <BsTranslate className="text-white"/>

            <BotonTraduccion  toggleLanguage={toggleLanguage}/>
          </div>
          <a
            href="/cvEsp.pdf"
            className={` text-cyan-400  font-bold inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 ${isEnglish ? "hidden" : "block"}`}>
            ¡Descargar CV!
            <BiBookmark className="w-4 h-4 ml-1  text-green-400" />
          </a>
          <a
            href="/cvEng.pdf"
            className={` text-cyan-400  font-bold inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 ${isEnglish ? "block" : "hidden"}`}>
            ¡Dowloand CV!
            <BiBookmark className="w-4 h-4 ml-1  text-green-400" />
          </a>
        </div>
      </header>
    );
};

export default Navbar;