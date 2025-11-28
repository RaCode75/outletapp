import { useEffect, useContext} from "react";
import { useFilteredProducts } from "../hooks/useFilteredProducts";
import { usePagination } from "../hooks/usePagination";

import Card from "./Card";
import { Link } from "react-router-dom";

import { CarritoContext } from "../context/CarritoContext";
import { BusquedaContext } from "../context/BusquedaContext";
import {ProductsContext} from "../context/ProductsContext";


const Productos = () => {
    const { busqueda } = useContext(BusquedaContext);
    const {productos, cargando, error } = useContext(ProductsContext);
    const{addToCarrito} = useContext(CarritoContext);

    //Busqueda
    const filterProducts = useFilteredProducts(productos, busqueda);
    
     const {
    currentPage,
    totalPages,
    currentItems: currentProducts,
    nextPage,
    prevPage,
    resetPage,
  } = usePagination(filterProducts, 8);

    useEffect(() => {
    resetPage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [busqueda]);

    if (cargando) return 'Cargando tienda...';
    if (error) return error;

    return(
        <div className="expositor bg-slate-100 align-middle justify-center">
        <h1 className="w-full text-center mb-2 py-2 font-bold text-slate-50 text-3xl bg-slate-400">Productos</h1>
        <ul className="grid grid-cols-2 justify-around gap-1 items-center md:grid-cols-3 lg:grid-cols-4 bg-slate-100">

            { currentProducts.map((producto) => (
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
            <div className="flex justify-center gap-4 mt-4 pb-4 bg-slate-100">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 font-bold bg-slate-500 text-white rounded transition-all
                      shadow-md shadow-slate-50 hover:cursor-pointer hover:bg-slate-50 hover:shadow-slate-500 hover:text-slate-500
                      disabled:hover:bg-slate-300 disabled:hover:text-white disabled:hover:cursor-not-allowed disabled:bg-slate-300"
                    >
                    Anterior
                </button>

                <span className="text-lg font-bold text-slate-500">
                    {currentPage} / {totalPages}
                </span>

                <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 font-bold bg-slate-500 text-white rounded transition-all
                      shadow-md shadow-slate-50 hover:cursor-pointer hover:bg-slate-50 hover:shadow-slate-500 hover:text-slate-500
                      disabled:hover:bg-slate-300 disabled:hover:text-white disabled:hover:cursor-not-allowed disabled:bg-slate-300"
                    >
                        Siguiente
                    </button>
            </div>
        </div>
    );
}

export default Productos;