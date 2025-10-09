import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const Detalles = () => {
  
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState(null);
  const URL = `https://fakestoreapi.com/products/${id}`;

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
  
  const {title, price,image, description, category} = producto

    return (
        <div className="cardDetalles">
            <h3>{title}</h3>
                <img src={image} className="imgDetalles"></img>
            <p>
                <strong>$ {price}</strong>
            </p>

            <p className="descripcion">
                {description}
            </p>
            <p className="cat">
                <i>Categoria: </i> {category}
            </p>

        </div>

    );
} 

export default Detalles;