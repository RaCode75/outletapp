import { useContext, useState } from "react";
import { BusquedaContext } from "../context/BusquedaContext";
import Lupa  from "../assets/Lupa.svg";

const Buscador = () => {
    const { setBusqueda } = useContext(BusquedaContext);
    const [texto, setTexto] = useState("");
    const handleKeyDown =(e) =>{
        if (e.key === 'Enter') {
            setBusqueda(texto);
            setTexto('')
        }
    }

    return(
        <div className="w-full flex justify-center py-2 bg-indigo-100">
            <input
                type="text"
                name="filter"
                id="filter"
                value={texto}
                className="border-2 border-slate-400 rounded-2xl pl-2 bg-slate-50"
                placeholder="Busca algo"
                onChange={(e) => setTexto(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button
            onClick={() => setBusqueda(texto)}
            className="ml-2 p-2 border border-slate-500 rounded-lg bg-slate-100 "
            ><img src={Lupa} className="h-5 w-5" /></button>
        </div>
    );

}

export default Buscador;