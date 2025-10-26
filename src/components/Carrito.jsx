const Carrito = ({inCarrito, deletedFromCarrito}) => {

    return(
        <div className="container mx-auto justify-items-center">
            <div className='w-full justify-items-center'>
                <img className="" src="../src/assets/cart.svg" width={50} height={50}/>
                <h2 className="text-lg">Carrito</h2>
            </div>
            <div className="grid grid-cols-2 justify-items-center sm:grid-cols-3 md:grid-cols-4">

                {inCarrito.map((producto, index) => (
                    <div key={index} className="h-[300px] w-[200px] rounded-3x1 p-6 shadow-md  grid-rows-4 justify-items-center align-middle m-2">
                        <img className="size-20 m-1" src= {producto.image} alt={producto.title} />
                        <p> { producto.title } : { producto.price } $ </p>
                        <button onClick={() => deletedFromCarrito(index)} className='group relative inline-flex
                         h-12 mt-4 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6
                         font-medium text-neutral-600 transition-all [box-shadow:0px_4px_1px_#a3a3a3] active:translate-y-[2px]
                          active:shadow-none'>Quitar del Carrito</button>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Carrito;