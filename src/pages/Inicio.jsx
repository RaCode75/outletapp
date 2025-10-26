import { useState } from "react";
import Productos from '../components/Productos';
import Carrito from '../components/Carrito';

const Inicio = () => {

    const [carrito, setCarrito] = useState([]);
        const addToCarrito = (producto) => {
            setCarrito([...carrito, producto]);
        };

    const deleteToCarrito = (indexToDelete) => {
        setCarrito(carrito.filter((_, index) => index !== indexToDelete));
    };

    return(
        <>
            <Productos addProduct = {addToCarrito} />
            <hr className="m-6"/>
            <Carrito
                inCarrito = {carrito}
                deletedFromCarrito = {deleteToCarrito}
            />
        </>
      
    );
}

export default Inicio;