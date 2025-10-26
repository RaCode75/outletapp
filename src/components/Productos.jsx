import { useState, useEffect } from "react";
import Card from "./Card";
import { Link, RouterContextProvider } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";


const Productos = () => {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);

    const{addToCarrito} = useContext(CarritoContext);

    const URL = 'https://fakestoreapi.com/products'

    useEffect(() => {
        fetch(URL)
        .then(respuesta => respuesta.json())
        .then((datos) => {
            setProductos(datos);
            setCargando(false);
        })
        .catch((err) => {
            setError('Ups, algo salio mal');
            setCargando(false);
            console.log(err.message);
        });
    },[]);

    if (cargando) return 'Cargando tienda...';
    if (error) return error;

    return(
        <div className="expositor bg-indigo-50 align-middle justify-center">
        <h1 className="w-full text-center mb-2 py-2 font-bold text-indigo-50 text-3xl bg-indigo-300">Productos</h1>
        <ul className="grid grid-cols-2 justify-items-center sm:grid-cols-3 md:grid-cols-4">
            { productos.map((producto) => (
            <li key={producto.id} className=" flex flex-col align-middle justify-items-center basis-1/4">
                <Link to={`/productos/${producto.id}`}>
                <Card data={producto} />
                </Link>
                <div className="justify-center">
                <button onClick={() => addToCarrito(producto)}className='group relative inline-flex h-6 w-[200px] items-center justify-center
                 overflow-hidden rounded-md border border-neutral-200 bg-indigo-200 px-6 font-medium text-neutral-600 transition-all
                 [box-shadow:0px_4px_1px_#a3a3a3] active:translate-y-[2px] active:shadow-none mt-2 mb-4 hover:cursor-pointer hover:bg-indigo-300'>Agregar al carrito</button>
                 </div>
            </li>
            ))
            
            }
        </ul>
        </div>
    );
}

export default Productos;