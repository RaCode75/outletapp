import { useState } from "react";
const Carrito = () => {
    const listaProductos = [
        {id: 1, nombre: "Papas", precio: 1000},
        {id: 2, nombre: "Batatas", precio: 800},
        {id: 3, nombre: "Cebollas", precio: 1300}
    ];

    const [carrito, setCarrito] = useState([]);

    const agregarCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    }

    return(
        <div>
            <h2>Productos</h2>
            <ul>
                {listaProductos.map(producto =>
                <li key={producto.id}>
                    {producto.nombre} :
                    {producto.precio} $
                    <button onClick={() => agregarCarrito(producto)}>Agregar</button>
                    {console.log(carrito)}
                </li>
                )}
            </ul>
            <hr></hr>
            <h2>Carrito</h2>
            {carrito.map(producto =>
                <p>{producto.nombre} :
                    {producto.precio}
                </p>
            )}
        </div>

    );

}

export default Carrito;