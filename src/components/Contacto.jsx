import { useState } from "react";

const Contacto = () => {

    const [correo, setCorreo] = useState('');
    const [consulta, setConsulta] = useState('');

    const manageContacto = (e) => {
        e.preventDefault();

        if (correo.trim() === "" || consulta.trim() === "") {
            alert("Por favor completa todos los campos");
            return;
        }

        alert(`Consulta enviada con éxito! En breve te responderemos a: ${correo}`)

        //Limpiamos el formulario
        setCorreo('');
        setConsulta('');
    };

    return(
        <div className="flex justify-center h-[60vh] items-center">
            <form onSubmit={ manageContacto} className="flex flex-col w-md gap-2">
                <h2 className="font-medium text-lg my-3 text-gray-700 text-center">Contacto</h2>

                <label htmlFor="Email" className="font-medium text-md text-gray-700">Email</label>
                <input className="border-1 h-8 px-2 rounded-md"
                    type='email'
                    value={correo}
                    id="correo"
                    onChange={(ev) => setCorreo(ev.target.value)}
                    />
                    <label htmlFor="Tu consulta"className="font-medium text-md text-gray-700">Tu consulta</label>
                    <textarea className="border-1 h-24 px-2 rounded-md"
                        type='text'
                        value= {consulta}
                        id="consulta"
                        onChange={(ev) => setConsulta(ev.target.value)}
                        />
                    <button
                     type='submit'
                        className='group relative inline-flex h-8 w-[100px] items-center justify-center mx-auto
                        overflow-hidden rounded-md border border-slate-400 bg-indigo-500 px-6 font-medium text-slate-50 transition-all
                        shadow-md shadow-slate-500 active:translate-y-[2px] active:shadow-none mt-2 mb-4 hover:cursor-pointer hover:bg-slate-50 hover:text-indigo-500'
                        >
                    Enviar</button>
            </form>
        </div>
    );
}

export default Contacto;