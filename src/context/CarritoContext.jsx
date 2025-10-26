import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CarritoContext = createContext();

export const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

      const addToCarrito = (producto) => {
            setCarrito([...carrito, producto]);
        };

    const deleteFromCarrito = (indexToDelete) => {
        setCarrito(carrito.filter((_, index) => index !== indexToDelete));
    };

    const emptyCarrito = () => {
        setCarrito([]);
    }

    return (
        <CarritoContext.Provider
            value={{ carrito, addToCarrito, deleteFromCarrito, emptyCarrito }}
        >
            {children}
        </CarritoContext.Provider>
    );
}