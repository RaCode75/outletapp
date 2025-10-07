import { useState, useEffect } from "react";
import Detalles from "./Detalles";

const Productos = () => {
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
                <Detalles data={producto} />
            </li>
            ))
            
            
            
            /* {productos.map((producto) =>(
                <li key={producto.id}>
                    {producto.title}:
                    {producto.price}$
                    <img src={producto.image} heigth={60} width={60}/>
                    </li>                
            ))} */}
        </ul>
        </div>
    );
}

export default Productos;