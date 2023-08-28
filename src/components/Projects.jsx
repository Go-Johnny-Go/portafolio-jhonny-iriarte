import { FaGithub } from "react-icons/fa";
import {Aplications} from "../data"

const Projects = ()=>{
    return(
        <section id="projects">
            <div className="px-5 py-10 text-center ">
                <div className="flex flex-col mb-20 gap-4 mt-10">
                    <FaGithub className="mx-auto w-10 h-10 text-cyan-400"/>
                    <h1 className="sm:text-4xl text-3xl font-bold  mb-4 text-red-600">
                    Some of my projects!
                    </h1>
                    <p className=" text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto   ">
                    these projects here were done in my class under the guidance of different teachers who are experts in their field, we have used different basic technologies like <span className="text-cyan-400">html, css, javascript</span> , we also adopted React as our main framework and <span className="text-cyan-400">Node.js</span> as server and <span className="text-cyan-400">Postgres SQL</span> as databases.
                    you can find them in my repositories <span className="text-cyan-400">GitHup</span>.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {Aplications.map((app) => (
                        <a 
                        href={app.link}
                        key={app.image}
                        className="sm:w-1/2 w-100 p-4">
                        <div className="flex relative">
                            <img 
                            className="absolute inset-0  w-full h-full object-cover object-center " 
                            src={app.image} 
                            alt="" 
                            />
                            <div className=" px-8 py-10  relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 ">
                                <h2 className="text-sm text-green-400">{app.subtitle}</h2>
                                <h1 className="text-lg text-white">{app.title}</h1>
                                <p className="">{app.description}</p>
                            </div>
                        </div>
                    </a>
                        ))}
                </div>
            </div>
        </section>
    );
};


export default Projects;