import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

const Detalles = () => {
  
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState(null);
  const URL = `https://691e2b39bb52a1db22bd3368.mockapi.io/productos/${id}`;

  const{addToCarrito} = useContext(CarritoContext);

  useEffect(() => {
    fetch(URL)
      .then(respuesta => respuesta.json()) 
      .then(dato => setProducto(dato)) 
      .catch((err) => {
            setError('Ups, algo salio mal');
            console.log(err.message);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id]);

  if(!producto)
    return <p>{error} ......</p>
  
  const {nombre, precio ,imagen , descripcion, categoria} = producto

    return (
        <div className="flex flex-col items-center py-4 bg-slate-100">
            <h3 className="w-full text-center mb-2 py-2 font-bold text-indigo-50 text-3xl bg-indigo-300">{nombre}</h3>
                <img src={imagen} className="w-100 my-4"></img>
            <p className="flex items-center">
                <strong
                className="text-2xl">
                    $ {precio}
                </strong>
                <button onClick={() => addToCarrito(producto)}className='group relative inline-flex h-8 w-[120px] ml-4 items-center justify-center
                 overflow-hidden rounded-md border border-slate-400 bg-indigo-500 px-3 font-medium text-slate-50 transition-all
                 shadow-md shadow-slate-500 active:translate-y-[2px] active:shadow-none mt-2 mb-4 hover:cursor-pointer hover:bg-slate-50 hover:text-indigo-500'>Al carrito!</button>
            </p>

            <p className="mx-8 my-4 text-lg">
                {descripcion}
            </p>
            <p className="cat">
                <i>Categoria: </i> {categoria}
            </p>

        </div>

    );
} 

export default Detalles;