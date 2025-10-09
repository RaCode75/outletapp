const Carrito = ({inCarrito, deletedFromCarrito}) => {

    return(
        <div className="cartContainer">
            <div className='cartIcon'>
                <img className="cartImg" src="../src/assets/cart.svg" width={50} height={50}/><h2 className="cartTag">Carrito</h2>
            </div>
            <div className="cart">

                {inCarrito.map((producto, index) => (
                    <div key={index} className="cardCart">
                        <img className="imgCard" src= {producto.image} alt={producto.title} />
                        <p> { producto.title } : { producto.price } $ </p>
                        <button onClick={() => deletedFromCarrito(index)}>Quitar del Carrito</button>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Carrito;