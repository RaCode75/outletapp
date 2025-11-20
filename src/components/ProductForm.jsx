import { useState } from "react";
import {useProductsContext} from "../context/ProductsContext";
import x from "../assets/x.png";

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
            className="fixed top-0 right-0 bottom-0 left-0 z-20 flex overflow-x-hidden overflow-y-auto
                justify-center items-center w-full h-full p-4 box-border bg-indigo-200"
            aria-modal="true"
            role="dialog"
            >
            <div className="relative  w-full w-max-96 h-full">
                    <div className='relative border-1 rounded-2xl p-4 w-full'>
                        <div className="flex items-center justify-between border-b-1">
                            <h3 className="text-2xl">
                            {modo === "add" ? "Agregar Producto" : "Editar Producto"}
                            </h3>
                            <button
                                type="button"
                                onClick={onClose}
                                className="rounded-2xl w-10 h-10 ml-auto pb-3
                                inline-flex justify-center items-center cursor-pointer transition-all delay-150 ease-in-out p0 ">
                                    <img src={x} alt="" />
                                </button>
                        </div>
                <form onSubmit={submitManage}>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 pt-4 pb-4">

             {/*********campo Nombre***********/}

                        <div className="col-span-2">
                            <label className="block mb-3 ">
                                Nombre
                            </label>
                            <input
                                type="text"
                                name="nombre"
                                id="nombre"
                                className="block border-1 border-indigo-300 rounded-2xl w-full px-3 py-3 box-border transition-all delay-150 ease-in-out
                                placeholder: text-indigo-500 bg-indigo-100 focus:outline-indigo-500"
                                placeholder="Nombre del producto"
                                value={producto.nombre || ""}
                                onChange={changeManage}
                                required
                                />
                        </div>
            {/****campo categoria***** */}
                        <div className="col-span-2">
                            <label className="block mb-3 ">
                                Categoria
                            </label>
                            <input
                                type="text"
                                name="categoria"
                                id="categoria"
                                className="block border-1 border-indigo-300 rounded-2xl w-full px-3 py-3 box-border transition-all delay-150 ease-in-out
                                placeholder: text-indigo-500 bg-indigo-100 focus:outline-indigo-500"
                                placeholder="Nombre del producto"
                                value={producto.categoria || ""}
                                onChange={changeManage}
                                required
                                />
                        </div>

    {/*********campo Precio***********/}

                        <div className="col-span-1 md:col-span-2 w-full">
                            <label className="">
                                Precio
                            </label>
                            <input
                                type="number"
                                name="precio"
                                id="precio"
                                className="block border-1 border-indigo-300 rounded-2xl w-full px-3 py-3 box-border transition-all delay-150 ease-in-out
                                placeholder: text-indigo-500 bg-indigo-100 focus:outline-indigo-500"
                                placeholder="$ 0.00"
                                value={producto.precio || ""}
                                onChange={changeManage}
                                required
                                min="0"
                                step="any"
                                />
                        </div>

            {/*******Campo imagen*****/}

                    <div className="col-span-1 md:col-span-2 w-full">
                        <label className="">
                            URL de la Imagen
                        </label>
                        <input
                            type="text"
                            name="imagen"
                            id="imagen"
                            className="col-span-1 md:col-span-2 w-full"
                            placeholder="https://ejemplo.com/imagen.png"
                            value={producto.imagen || ''}
                            onChange={changeManage}
                            />
                    </div>

            {/*******Campo descripcion*****/}

                    <div className="col-span-2">
                        <label className="">
                            Descripción del Producto
                        </label>
                        <textarea
                            name="descripcion"
                            id="descripcion"
                            rows='4'
                            className="block border-1 border-indigo-300 rounded-2xl w-full px-3 py-3 box-border transition-all delay-150 ease-in-out
                                placeholder: text-indigo-500 bg-indigo-100 focus:outline-indigo-500 resize-y"
                            placeholder="Descripción del Producto"
                            value={producto.descripcion || ''}
                            onChange={changeManage}
                            required
                            ></textarea>                            
                    </div>
                </div>
        {/*******Botones accion******/}

                <div className="">
            {/******Boton primario****/}
                    <button
                        type="submit"
                        className=""
                    >
                        {modo === 'add' ? <>Agregar</> : <>Actualizar</>}
                    </button>

            {/***Boton sec. Cancel***/}
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