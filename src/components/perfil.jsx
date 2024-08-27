import {  FaGithub, } from "react-icons/fa";
import { PiTiktokLogoLight } from "react-icons/pi";

const PerfilPhoto = ( {isEnglish} )=> {
  const divStyle = {
    backgroundImage: "url('bg.jpg')"
  }



    return(
        <section className="bg-cover w-full h-full" style={divStyle}>
            <div className="flex flex-col items-center p-20   ">
                <div className="flex flex-col p-5 my-5 items-center bg-slate-800 bg-opacity-50 rounded-lg">
                  <h2 className={`text-cyan-400 text-center text-3xl md:text-4xl font-new font-bold ${isEnglish ? "block" : "hidden"}`}>Front-End Developer</h2>
                  <h1 className="  text-sm text-center md:text-3xl text-white font-bold m-4 hidden">Jhonny Iriarte Condori</h1>
                  <h2 className={`text-cyan-400 text-3xl md:text-4xl font-new font-bold text-center ${isEnglish ? "hidden" : "block"}`}>Desarrollador Frontend</h2>
                  <div className="flex gap-4 m-4 just "> 
                    <a href="https://github.com/Iriarte-star" target="blank" >
                      <FaGithub className="w-10 h-10 text-green-400"/>
                    </a> 
                    <a href="https://www.tiktok.com/@iriartecondorijhonny?_t=8hD7iTgMIzd&_r=1" target="blank" >
                      <PiTiktokLogoLight   className="w-10 h-10 text-green-400"/>
                    </a>
                  </div>
                </div>
            </div>
        </section>


    );
};


export default PerfilPhoto;
