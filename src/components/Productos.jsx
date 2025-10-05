import { useState, useEffect } from "react";

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
        <h2>Productos</h2>
        <ul>
            {productos.map((producto) =>(
                <li key={producto.id}>
                    {producto.title}</li>
                
            ))}
        </ul>
        </div>
    );
}

export default Productos;