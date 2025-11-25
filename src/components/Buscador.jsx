import { useContext } from "react";
import { BusquedaContext } from "../context/BusquedaContext";
import { useState } from "react";

const Buscador = () => {
    const { setBusqueda } = useContext(BusquedaContext);
    const [texto, setTexto] = useState("");

    return(
        <div className="w-full flex justify-center py-2 bg-indigo-100">
            <input
                type="text"
                name="filter"
                id="filter"
                className="border-2 border-slate-400 rounded-2xl pl-2 bg-slate-50"
                placeholder="Busca algo"
                onChange={(e) => setTexto(e.target.value)}
            />
            <button
            onClick={() => setBusqueda(texto)}
            >B</button>
        </div>
    );

}

export default Buscador;