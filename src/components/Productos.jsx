import { useState, useEffect } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const Productos = ({addProduct}) => {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);

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
        <div className="expositor">
        <h1>Productos</h1>
        <ul className="prods">
            { productos.map((producto) => (
            <li key={producto.id} className="li_item">
                <Link to={`/productos/${producto.id}`}>
                <Card data={producto} />
                </Link>
                <button onClick={() => addProduct(producto)}className='comprar'>Agregar al carrito</button>
            </li>
            ))
            
            }
        </ul>
        </div>
    );
}

export default Productos;