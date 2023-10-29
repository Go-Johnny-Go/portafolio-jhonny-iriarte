import { FaLinkedinIn} from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";
import { Opiniones } from "../data";

const Testimonials =({isEnglish})=> {
  return (
    <section id="testimonials">
      <div className="container px-5 py-40 mx-auto  text-center">
        <FaLinkedinIn className="w-10 h-10 inline-block mb-4 text-cyan-400" />
        <h1 className={`sm:text-4xl text-3xl font-bold title-font text-red-600  mb-12 ${isEnglish ? "hidden" : "block"}`}>
         Client Testimonials
        </h1>
        <h1 className={`sm:text-4xl text-3xl font-bold title-font text-red-600  mb-12 ${isEnglish ? "block" : "hidden"}`}>
         Testimonios de Clientes
        </h1>
        <div className="flex flex-wrap m-4">
          {Opiniones.map((testimonial) => (
            <div key={testimonial.id} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <BiBookmark className="block  text-green-400 mb-4 h-6 w-6" />
                <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className=" text-cyan-400 text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;