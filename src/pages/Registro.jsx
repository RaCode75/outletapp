import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Registro = () => {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [repetirContraseña, setRepetirContraseña] = useState("");

  const { login } = useAuthContext();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (correo.trim() === "" ||
        contraseña.trim() === "" ||
        repetirContraseña.trim() === "")
    {
      alert("Completa todos los campos.");
      return;
    }

    //compara la repeticion de la contraseña
    if( contraseña !== repetirContraseña){
        alert("Las contraseñas no coinciden!.");
        return;
    }

    // Crear token falso
    const fakeToken = btoa(`${correo}:${contraseña}`);

    // Guardar token y credenciales
    localStorage.setItem("token", fakeToken);
    localStorage.setItem("email", correo);
    localStorage.setItem("password", contraseña);

    // Loguear y redirigir
    login(correo);
    navigate("/carrito");
  };

  return (
    <div className="flex justify-center h-[60vh] items-center bg-slate-50">
      <form onSubmit={handleRegister} className="flex flex-col w-md gap-2">

        <h2 className="font-medium text-lg my-3 text-gray-700 text-center">Registro</h2>

        <label className="font-medium text-md text-gray-700">Correo</label>
        <input
          className="border h-8 px-2 rounded-md bg-white"
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <label className="font-medium text-md text-gray-700">Contraseña</label>
        <input
          className="border h-8 px-2 rounded-md bg-white"
          type="password"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
        <label className="font-medium text-md text-gray-700">Repite Contraseña</label>
        <input
          className="border h-8 px-2 rounded-md bg-white"
          type="password"
          value={repetirContraseña}
          onChange={(e) => setRepetirContraseña(e.target.value)}
        />

        <button className='group relative inline-flex h-8 w-[150px] items-center justify-center mx-auto
            overflow-hidden rounded-md border border-slate-400 bg-indigo-500 px-6 font-medium text-slate-50 transition-all
            shadow-md shadow-slate-500 active:translate-y-[2px] active:shadow-none mt-2 mb-4 hover:cursor-pointer hover:bg-slate-50 hover:text-indigo-500'>
        Crear cuenta
        </button>
      </form>
    </div>
  );
};

export default Registro;