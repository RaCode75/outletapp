import { useState } from "react";
import {useProductsContext} from "..context/ProductsContext";

const ProductForm =({ productoInicial = {}, modo = "add", onClose }) => {

    const [producto, setProducto] = useState(productoInicial);
    const { addProduct, editProduct } = useProductsContext();

    const changeManage = (ev) => {
        const { name, value } = ev.target;
        setProducto({ ...producto, [name]: value});
    };

    const submitManage = async(ev) => {
        ev.preventDefault();
        if(modo === "add"){
            await addProduct(producto);
        } else {
            await editProduct(producto);
        }
        onClose();
    };

    return (
        <div
            className=""
            aria-modal="true"
            role="dialog"
            >
            <div className="">
                    <div className="">
                        <div className="">
                            <h3>
                            {modo === "add" ? "Agregar Producto" : "Editar Producto"}
                            </h3>
                            <button
                                type="button"
                                onClick={onClose}
                                className="">
                                    <img src="../src/assets/x.png" alt="" />
                                </button>
                        </div>
                <form onSubmit={submitManage}>
                    <div className="">

             {"*********campo Nombre***********"}

                        <div className="col-span-2">
                            <label className="">
                                Nombre
                            </label>
                            <input
                                type="text"
                                name="nombre"
                                id="nombre"
                                className=""
                                placeholder="Nombre del producto"
                                value={producto.name || ""}
                                onChange={changeManage}
                                required
                                />
                        </div>

    {"*********campo Precio***********"}

                        <div className="col-span-1 md:col-span-2">
                            <label className="">
                                Precio
                            </label>
                            <input
                                type="number"
                                name="precio"
                                id="precio"
                                className=""
                                placeholder="$ 0.00"
                                value={producto.precio || ""}
                                onChange={changeManage}
                                required
                                min="0"
                                step="any"
                                />
                        </div>

            {'*******Campor imagen*****'}

                    <div className="col-span-1 md:col-span-2">
                        <label className="">
                            URL de la Imagen
                        </label>
                        <input
                            type="text"
                            name="imagen"
                            id="imagen"
                            className=""
                            placeholder="https://ejemplo.com/imagen.png"
                            value={producto.imagen || ''}
                            onChange={changeManage}
                            />
                    </div>

            {'*******Campor descripcion*****'}

                    <div className="col-span-2">
                        <label className="">
                            Descripción del Producto
                        </label>
                        <textarea
                            name="descripción"
                            id="descripción"
                            rows='4'
                            className=""
                            placeholder="Descripción del Producto"
                            value={producto.descripcion || ''}
                            onChange={changeManage}
                            required
                            ></textarea>                            
                    </div>
                </div>
        {'*******Botones accion******'}

                <div className="">
            {'******Boton primario****'}
                    <button
                        type="submit"
                        className=""
                    >
                        {modo === 'add' ? <>Agregar</> : <>Actualizar</>}
                    </button>

            {'***Boton sec. Cancel***'}
                <button
                    type="button"
                    onClick={onClose}
                    className=""
                    >
                        Cancelar
                    </button>
                </div>
              </form>                
            </div>
        </div>
    </div>
    );
}

export default ProductForm;