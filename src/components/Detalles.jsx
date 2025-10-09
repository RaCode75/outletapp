import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const Detalles = () => {
  
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);
  const URL = `https://fakestoreapi.com/products/${id}`;

  useEffect(() => {
    fetch(URL)
      .then(respuesta => respuesta.json()) 
      .then(dato => setProducto(dato)) 
      .catch((err) => {
            setError('Ups, algo salio mal');
            setCargando(false);
            console.log(err.message);
        });
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

/*import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const Detalles = () => {

    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const URL = `https://fakestoreapi.com/products/1`;

    useEffect(() => {
    fetch(URL)
      .then(respuesta => respuesta.json())
      .then(dato => setProducto(dato));
    }) .catch((err) => {
            console.log(err.message);
        });
  },[id]);

    
    /*const {title, price,image, description, category} = producto;*/
    /*
    return (
        <div className="card">
            <h3>{producto.title}</h3>
                <img src={producto.image} className="imgdetalles"></img>
       

        </div>

    );
} 

export default Detalles;*/