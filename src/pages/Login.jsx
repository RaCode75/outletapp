import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import {useAuthContext } from '../context/AuthContext';

const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');

    const {login} = useAuthContext();
    const navigate = useNavigate();

    const manageSubmit = (ev) => {
        ev.preventDefault();

        if (usuario.trim() === "" || contraseña.trim() === "") {
      alert("Por favor completa todos los campos.");
      return;
    }

    //Credenciales guardadas x Registro
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

        //Validacion de credenciales
        if(usuario == 'admin' && contraseña == '1234'){
            login(usuario);
            navigate('/admin');
        } else if (usuario === storedEmail && contraseña === storedPassword){
                login(usuario);
                navigate("/carrito");
        } else {
            alert('Usuario o Contraseña incorrecto');
        }
    }

    return (
        <div className="bg-slate-100">
        <div className="flex flex-col justify-center h-[60vh] items-center  w-100 mx-auto bg-slate-100">
            <form onSubmit={ manageSubmit} className="flex flex-col w-full gap-2">
                <h2 className="font-medium text-2xl my-3 text-gray-700 text-center">Login</h2>
                <label htmlFor="usuario" className="font-medium text-md text-gray-700">Usuario</label>
                <input className="border-1 h-8 px-2 rounded-md bg-white"
                    type='text'
                    value={usuario}
                    onChange={(ev) => setUsuario(ev.target.value)}
                    />
                    <label htmlFor="password"className="font-medium text-md text-gray-700">Contraseña</label>
                    <input className="border-1 h-8 px-2 rounded-md bg-white"
                        type='password'
                        value={contraseña}
                        onChange={(ev) => setContraseña(ev.target.value)}
                        />                    
                    <button type='submit'
                        className='group relative inline-flex h-8 w-[100px] items-center justify-center mx-auto
                        overflow-hidden rounded-md border border-slate-400 bg-indigo-500 px-6 font-medium text-slate-50 transition-all
                        shadow-md shadow-slate-500 active:translate-y-[2px] active:shadow-none mt-2 mb-4 hover:cursor-pointer hover:bg-slate-50 hover:text-indigo-500'>
                    Login</button>                   

            </form>

                    <div className="flex flex-col w-full items-center mt-4 bg-slate-100">
                        <p className="font-medium text-2xl mb-5 text-gray-700 text-center">No tienes usuario?</p>
                      <button type='button'
                        onClick={() => navigate("/registro")}
                        className='group relative inline-flex h-8 w-[100px] items-center justify-center mx-auto
                        overflow-hidden rounded-md border border-slate-400 bg-indigo-500 px-6 font-medium text-slate-50 transition-all
                        shadow-md shadow-slate-500 active:translate-y-[2px] active:shadow-none mt-2 mb-4 hover:cursor-pointer hover:bg-slate-50 hover:text-indigo-500'>
                        Registrate</button>
                    </div>
            </div>
        </div>
        );
    }

export default Login;
