import { FaGithub } from "react-icons/fa";
import {Aplications} from "../data"
import Todo from './Todo'

const Projects = ({isEnglish})=>{
    return(
        <section id="projects">
            <div className="px-5  text-center ">
                <div className="flex flex-col mb-20 gap-4 mt-10">
                    <FaGithub className="mx-auto w-10 h-10 text-cyan-400"/>
                    <h1 className={` font-new sm:text-4xl text-3xl font-bold  mb-4 text-red-600 ${isEnglish ? "block" : "hidden"}`}>
                    Some of my projects!
                    </h1>
                    <h1 className={`font-new sm:text-4xl text-3xl font-bold  mb-4 text-red-600 ${isEnglish ? "hidden" : "block"}`}>
                    Algunos de mis Proyectos
                    </h1>
                    <p className={` text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto ${isEnglish ? "block" : "hidden"}`}>
                    these projects here were done in my class under the guidance of different teachers who are experts in their field, we have used different basic technologies like <span className="text-cyan-400">html, css, javascript</span> , we also adopted React as our main framework and <span className="text-cyan-400">Node.js</span> as server and <span className="text-cyan-400">Postgres SQL</span> as databases.
                    you can find them in my repositories <span className="text-cyan-400">GitHup</span>.
                    </p>
                    <p className={` text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto ${isEnglish ? "hidden" : "block"}`}>
                    estos proyectos se han realizado en mi clase bajo la dirección de diferentes profesores expertos en su campo, hemos utilizado diferentes tecnologías básicas como<span className="text-cyan-400">html, css, javascript</span> , también adoptamos React como marco principal y<span className="text-cyan-400">Node.js</span> como servidor y <span className="text-cyan-400">Postgres SQL</span> como databases,
                    puedes encontrarlo en mi repositorio <span className="text-cyan-400">GitHup</span>.
                    </p>
                </div>
                <div className=' grid items-center justify-center '>
                    <Todo/>
                </div>
            </div>
        </section>
    );
};


export default Projects;