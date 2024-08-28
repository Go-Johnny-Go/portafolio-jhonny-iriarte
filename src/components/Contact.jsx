import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";

const Contact=({isEnglish})=> {

  {/*mensaje de whatsapp*/}

  const [formData, setFormData] = useState({
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { mensaje } = formData;
    const phoneNumber = "59174320607"; // Número de WhatsApp en Bolivia

    // Construye la URL de WhatsApp con el mensaje
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(mensaje)}`;

    window.open(whatsappURL, "_blank");
  };


  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Ciudad+Del+Nino,+Cochabamba,+Bolivia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                DIRECCIÓN
              </h2>
              <p className="mt-1">
               100 Ciudad Del Niño. <br />
                Cochabamba,tiquipaya
              </p>
            </div>
            <div className="lg:w-56 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                CORREO ELECTRÓNICO
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                iriarte.condori.jhonny25@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                NÚMERO DE TELÉFONO
              </h2>
              <p className="leading-relaxed">+591 74320607</p>
            </div>
          </div>
        </div>
        <form
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className={`font-new text-red-600 sm:text-4xl text-3xl mb-1 font-bold title-font ${isEnglish ? "hidden" : "block" }`}>
            ¡Here me!
          </h2>
          <h2 className={`font-new text-red-600 sm:text-4xl text-3xl mb-1 font-bold title-font ${isEnglish ? "block" : "hidden" }`}>
            ¡Contratame!
          </h2>
          <p className={` text-gray-200 font-raleway leading-relaxed mb-5 ${isEnglish ? "hidden" : "block"}`}>
          Leave me your name and email and let's get your projects up and running!<br/>
            <span className="text-cyan-400">Let's get to work!</span>
          </p>

          <p className={` text-gray-200 font-raleway leading-relaxed mb-5 ${isEnglish ? "block" : "hidden"}`}>
          Dejame tu Nombre y correo electronico y hagamos que tus proyectos enpiezen a funcionar!
          <br/>
            <span className="text-cyan-400">Manos a la Obra!</span>
          </p>
          <form onSubmit={handleSubmit}>
            <div>
              <div className="relative mb-4">

              </div>
            </div>
          </form>
          <button
            type="submit"
            className="text-white font-bold bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded text-lg flex items-center justify-center gap-2 ">
               Send
          <span className=" text-white">
              <BsWhatsapp/>
          </span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;