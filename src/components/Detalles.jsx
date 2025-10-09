/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const Detalles = () => {
  
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  const URL = `https://fakestoreapi.com/products/${id}`;

  useEffect(() => {
    fetch(URL)
      .then(respuesta => respuesta.json()) 
      .then(dato => setProducto(dato));

    },[id]);

  if(!producto)
    return <p>Cargando ......</p>
  
  const {title, price,image, description, category} = producto
    return (
        <div className="cardDetalle">
            <h3>{title}</h3>
                <img src={image} className="imgdetalles"></img>
            <p>
                <strong>$ {price}</strong>
            </p>
            <button className="comprar">Agregar al carrito</button>

             <p className="cat">
                <i>Categoria: </i> {category}
            </p>
            <p>
                {description}
            </p>

        </div>

    );
} 

export default Detalles;

