import { useState, useEffect } from "react";
import Card from "./Card";
import { Link, RouterContextProvider } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { BusquedaContext } from "../context/BusquedaContext";


const Productos = () => {
    const { busqueda } = useContext(BusquedaContext);

    const [productos, setProductos] = useState([]);
    const filterProducts = productos.filter(producto => {
        const filtro = busqueda.toLowerCase();
        return (
            producto.nombre.toLowerCase().includes(filtro) ||
            producto.categoria?.toLowerCase().includes(filtro) ||
            producto.descripcion?.toLowerCase().includes(filtro) ||
            producto.precio?.toString().includes(filtro)
        );
    });
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);

    const{addToCarrito} = useContext(CarritoContext);

    const URL = 'https://691e2b39bb52a1db22bd3368.mockapi.io/productos'

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
        <div className="expositor bg-slate-100 align-middle justify-center">
        <h1 className="w-full text-center mb-2 py-2 font-bold text-slate-50 text-3xl bg-slate-400">Productos</h1>
        <ul className="grid grid-cols-2 justify-around gap-1 items-center md:grid-cols-3 lg:grid-cols-4">
            { filterProducts.map((producto) => (
            <li key={producto.id} className=" flex flex-col align-middle items-center basis-1/4">
                <Link to={`/productos/${producto.id}`}>
                <Card data={producto} />
                </Link>
                <div className="justify-center">
                <button onClick={() => addToCarrito(producto)}className='group relative inline-flex h-8 w-[200px] items-center justify-center
                 overflow-hidden rounded-md border border-slate-400 bg-indigo-500 px-6 font-medium text-slate-50 transition-all
                 shadow-md shadow-slate-500 active:translate-y-[2px] active:shadow-none mt-2 mb-4 hover:cursor-pointer hover:bg-slate-50 hover:text-indigo-500'>Agregar al carrito</button>
                 </div>
            </li>
            ))
            
            }
        </ul>
        </div>
    );
}

export default Productos;