import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const PerfilPhoto = ()=> {
  const divStyle = {
    backgroundImage: "url('/public/bg.jpg')"
  }
    return(
        <section className="bg-cover w-full h-full" style={divStyle}>
            <div className="flex flex-col items-center p-20   ">
                <img src="/perfil-photo.png" alt="this is perfil photo" className=" object-cover object-center  rounded-full  w-52 h-52  border-red-600 border-4"  />
                <div className="flex flex-col p-5 my-5 items-center bg-slate-800 bg-opacity-25 rounded-lg">
                  <h1 className=" sm:text-4xl text-3xl text-white font-bold m-4">Jhonny Iriarte Condori</h1>
                  <h2 className=" text-cyan-400 text-2xl font-semibold">Sofware Ingineer</h2>
                  <div className="grid grid-cols-4 gap-4 m-4 ">
                    <FaFacebookF className="w-10 h-10 text-green-600"/>
                    <FaInstagram className="w-10 h-10 text-green-600"/>  
                    <FaGithub className="w-10 h-10 text-green-600"/>
                    <FaLinkedinIn className="w-10 h-10 text-green-600"/>                
                  </div>
                </div>
            </div>
        </section>


    );
};


export default PerfilPhoto;