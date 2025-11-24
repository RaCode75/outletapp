import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import cart from '../assets/cart.svg'

const Carrito = () => {
    const{carrito, deleteFromCarrito} = useContext(CarritoContext);
    const total = carrito.reduce((acum, producto) => acum + parseFloat(producto.precio), 0);

    return(
        <div className="mx-auto justify-items-center bg-slate-100">
            <div className='w-full justify-items-center pt-2 bg-indigo-300 '>
                <img className="" src={cart} width={50} height={50}/>
                <h2 className="text-lg font-bold text-slate-50">Tu Carrito</h2>
                
            </div>
            <div className="grid grid-cols-2 w-full justify-items-center sm:grid-cols-3 md:grid-cols-4 bg-slate-100 py-4">

                {carrito.map((producto, index) => (
                    <div key={index} className="h-[300px] w-[200px] bg-white rounded-3xl p-3 shadow-md shadow-slate-400  grid-rows-4 justify-items-center content-between m-1">
                        <h3 className="text-lg font-semibold">{producto.nombre}</h3>
                <img src={producto.imagen} className="size-20 m-1"></img>
            <p>
                <strong>$ {producto.precio}</strong>
            </p>
                        <button onClick={() => deleteFromCarrito(index)} className='group relative inline-flex
                         h-12 mt-4 items-center justify-center overflow-hidden rounded-md border border-slate-400 bg-indigo-500 px-6 font-medium text-slate-50 
                         transition-all shadow-md shadow-slate-500 hover:bg-slate-50 hover:text-indigo-500 hover:cursor-pointer active:translate-y-[2px]
                          active:shadow-none'>Quitar del Carrito</button>
                    </div>
                    
                ))}
            </div>
            <h2 className="text-lg font-bold py-4">Total: ${total}</h2>
        </div>

    );
};

export default Carrito;