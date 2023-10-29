
function BotonTraduccion({ toggleLanguage }) {
  return (
    <button
      className=" bg-slate-900 text-white p-1 rounded-md pl-2 pr-2"
      onClick={toggleLanguage}
    >
      Espanol-Ingles
    </button>
  );
}

export default BotonTraduccion;
