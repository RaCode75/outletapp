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
        if(usuario == 'admin' && contraseña == '1234'){
            login(usuario);
            navigate('/admin');
        } else {
            alert('Usuario o Contraseña incorrecto');
        }
    }

    return (
        <div className="flex justify-center h-[60vh] items-center">
            <form onSubmit={ manageSubmit} className="flex flex-col w-md gap-2">
                <h2 className="font-medium text-lg my-3 text-gray-700 text-center">Login</h2>
                <label htmlFor="usuario" className="font-medium text-md text-gray-700">Usuario</label>
                <input className="border-1 h-8 px-2 rounded-md"
                    type='text'
                    value={usuario}
                    onChange={(ev) => setUsuario(ev.target.value)}
                    />
                    <label htmlFor="password"className="font-medium text-md text-gray-700">Contraseña</label>
                    <input className="border-1 h-8 px-2 rounded-md"
                        type='text'
                        value={contraseña}
                        onChange={(ev) => setContraseña(ev.target.value)}
                        />
                    <button type='submit'className='group relative inline-flex h-8 w-[100px] items-center justify-center mx-auto
                        overflow-hidden rounded-md border border-slate-400 bg-indigo-500 px-6 font-medium text-slate-50 transition-all
                        shadow-md shadow-slate-500 active:translate-y-[2px] active:shadow-none mt-2 mb-4 hover:cursor-pointer hover:bg-slate-50 hover:text-indigo-500'>
                    Login</button>
            </form>
        </div>
        );
    }

export default Login;
