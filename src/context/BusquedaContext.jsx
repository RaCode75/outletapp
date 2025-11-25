/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const BusquedaContext = createContext();

export const BusquedaProvider = ({ children }) => {
    const [busqueda, setBusqueda ] = useState("");

    return (
        <BusquedaContext.Provider value={{ busqueda, setBusqueda }}>
            {children}
        </BusquedaContext.Provider>
    );
};
