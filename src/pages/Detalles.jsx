import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const Detalles = () => {
  
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState(null);
  const URL = `https://691e2b39bb52a1db22bd3368.mockapi.io/productos/${id}`;

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
  
  const {nombre , precio,imagen, descripcion, categoria} = producto

    return (
        <div className="flex flex-col items-center">
            <h3 className="w-full text-center mb-2 py-2 font-bold text-indigo-50 text-3xl bg-indigo-300">{nombre}</h3>
                <img src={imagen} className="w-100"></img>
            <p>
                <strong>$ {precio}</strong>
            </p>

            <p className="mx-8">
                {descripcion}
            </p>
            <p className="cat">
                <i>Categoria: </i> {categoria}
            </p>

        </div>

    );
} 

export default Detalles;