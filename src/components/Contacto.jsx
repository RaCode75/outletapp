const Contacto = () => {

    const manageContacto = () => {
        
    }
    return(
<div className="flex justify-center h-[60vh] items-center">
            <form onSubmit={ manageContacto} className="flex flex-col w-md gap-2">
                <h2 className="font-medium text-lg my-3 text-gray-700 text-center">Contacto</h2>
                <label htmlFor="Email" className="font-medium text-md text-gray-700">Email</label>
                <input className="border-1 h-8 px-2 rounded-md"
                    type='text'
                    value=''
                    /*onChange={(ev) => }*/
                    />
                    <label htmlFor="Tu consulta"className="font-medium text-md text-gray-700">Contraseña</label>
                    <textarea className="border-1 h-8 px-2 rounded-md"
                        type='text'
                        value='{contraseña}'
                        
                        />
                    <button type='submit'className='group relative inline-flex h-8 w-[100px] items-center justify-center mx-auto
                        overflow-hidden rounded-md border border-slate-400 bg-indigo-500 px-6 font-medium text-slate-50 transition-all
                        shadow-md shadow-slate-500 active:translate-y-[2px] active:shadow-none mt-2 mb-4 hover:cursor-pointer hover:bg-slate-50 hover:text-indigo-500'>
                    Login</button>
            </form>
        </div>
    );
}

export default Contacto;