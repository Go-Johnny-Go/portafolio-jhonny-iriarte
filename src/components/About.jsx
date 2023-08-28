
import {  FaInstagram } from "react-icons/fa";

const About = () => {

    return(
        <section id="about">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20 p-40 ">
            <FaInstagram className="w-10 h-10 inline-block mb-4 text-cyan-400" />
            <h1 className="sm:text-4xl text-3xl font-bold text-red-600 mb-4">
                Full Stack Develop
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto ">
            Hi, my name is Jhonny, and this is a little bit about how I became a full-stack programmer. I started pursuing this path when COVID-19 entered our lives. My first teachers were YouTube, the Platzi platform, and Udemy. Finally, I made the decision to embark on a professional career as a full-stack programmer through the Academlo bootcamp.
            </p>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mt-5 ">
            <span className=" text-cyan-400">Only fail when you stop trying  </span><br/>
            - Jhonny Iriarte Condori
            </p>           
          </div>
        </div>
      </section>
    )

}

export default About;