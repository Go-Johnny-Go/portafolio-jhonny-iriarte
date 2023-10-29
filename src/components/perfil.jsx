import {  FaGithub, } from "react-icons/fa";
import { PiTiktokLogoLight } from "react-icons/pi";

const PerfilPhoto = ( {isEnglish} )=> {
  const divStyle = {
    backgroundImage: "url('bg.jpg')"
  }



    return(
        <section className="bg-cover w-full h-full" style={divStyle}>
            <div className="flex flex-col items-center p-20   ">
                <img src="/tiktok1.png" alt="this is perfil photo" className=" object-cover object-center   border-green-400  rounded-xl w-52 h-52   border-4"  />
                <div className="flex flex-col p-5 my-5 items-center bg-slate-800 bg-opacity-50 rounded-lg">
                  <h1 className=" sm:text-4xl text-3xl text-white font-bold m-4">Jhonny Iriarte Condori</h1>
                  <h2 className={`text-cyan-400 text-2xl font-semibold ${isEnglish ? "block" : "hidden"}`}>Sofware Ingineer</h2>
                  <h2 className={`text-cyan-400 text-2xl font-semibold ${isEnglish ? "hidden" : "block"}`}>Ingeniero de sofware</h2>
                  <div className="flex gap-4 m-4 just "> 
                    <a href="https://github.com/Iriarte-star">
                      <FaGithub className="w-10 h-10 text-green-400"/>
                    </a> 
                    <a href="https://www.tiktok.com/@iriartecondorijho?_t=8gthuM6w4RS&_r=1">
                      <PiTiktokLogoLight   className="w-10 h-10 text-green-400"/>
                    </a>
                  </div>
                </div>
            </div>
        </section>


    );
};


export default PerfilPhoto;
