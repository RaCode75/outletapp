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
            className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  w-full md:w-[70vh] z-20 flex flex-col col-span-1  overflow-x-hidden overflow-y-auto
                justify-center items-center  p-4 box-border bg-indigo-200"
            aria-modal="true"
            role="dialog"
            >
            <div className="relative  w-full w-max-96 h-full">
                    <div className='relative border-1 rounded-2xl p-4 w-full'>
                        <div className="flex items-center justify-between border-b-1">
                            <h3 className="text-2xl font-semibold text-slate-600">
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
                    <div className="grid gap-4 grid-cols-1  pt-4 pb-4">

             {/*********campo Nombre***********/}

                        <div className="col-span-2">
                            <label className="block mb-1 pl-4 text-lg font-medium text-slate-500 ">
                                Nombre
                            </label>
                            <input
                                type="text"
                                name="nombre"
                                id="nombre"
                                className="block border-2 border-indigo-300 rounded-2xl w-full px-3 py-3 box-border transition-all delay-150 ease-in-out
                                text-slate-600
                                placeholder: pl-4 text-lg font-medium bg-indigo-50 focus:outline-indigo-500"
                                placeholder="Nombre del producto"
                                value={producto.nombre || ""}
                                onChange={changeManage}
                                required
                                />
                        </div>
            {/****campo categoria***** */}
                        <div className="col-span-2">
                            <label className="block mb-1 pl-4 text-lg font-medium text-slate-500 ">
                                Categoria
                            </label>
                            <input
                                type="text"
                                name="categoria"
                                id="categoria"
                                className="block border-2 border-indigo-300 rounded-2xl w-full px-3 py-3 box-border transition-all delay-150 ease-in-out
                                text-slate-600
                                placeholder: pl-4 text-lg font-medium bg-indigo-50 focus:outline-indigo-500"
                                placeholder="Categoria"
                                value={producto.categoria || ""}
                                onChange={changeManage}
                                required
                                />
                        </div>

    {/*********campo Precio***********/}

                        <div className="col-span-2 md:col-span-2 w-full">
                            <label className="block mb-1 pl-4 text-lg font-medium text-slate-500">
                                Precio
                            </label>
                            <input
                                type="number"
                                name="precio"
                                id="precio"
                                className="block border-2 border-indigo-300 rounded-2xl w-full px-3 py-3 box-border transition-all delay-150 ease-in-out
                                text-slate-600
                                placeholder: pl-4 text-lg font-medium bg-indigo-50 focus:outline-indigo-500"
                                placeholder="$ 0.00"
                                value={producto.precio || ""}
                                onChange={changeManage}
                                required
                                min="0"
                                step="any"
                                />
                        </div>

            {/*******Campo imagen*****/}

                    <div className="col-span-2 md:col-span-2 w-full">
                        <label className="block mb-1 pl-4 text-lg font-medium text-slate-500">
                            URL de la Imagen
                        </label>
                        <input
                            type="text"
                            name="imagen"
                            id="imagen"
                            className="block border-2 border-indigo-300 rounded-2xl w-full px-3 py-3 box-border transition-all delay-150 ease-in-out
                            text-slate-600
                            placeholder: pl-4 text-lg font-medium bg-indigo-50 focus:outline-indigo-500"
                            placeholder="https://ejemplo.com/imagen.png"
                            value={producto.imagen || ''}
                            onChange={changeManage}
                            />
                    </div>

            {/*******Campo descripcion*****/}

                    <div className="col-span-2">
                        <label className="block mb-1 pl-4 text-lg font-medium text-slate-500">
                            Descripción del Producto
                        </label>
                        <textarea
                            name="descripcion"
                            id="descripcion"
                            rows='4'
                            className="block border-2 border-indigo-300 rounded-2xl w-full px-3 py-3 box-border transition-all delay-150 ease-in-out
                            text-slate-600
                            placeholder: pl-4 text-lg font-medium bg-indigo-50 focus:outline-indigo-500 resize-y"
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
                        className="group relative inline-flex h-8 w-[100px] mx-2 items-center justify-center
                            overflow-hidden rounded-md border border-slate-400 bg-indigo-500 px-6 font-medium text-slate-50 transition-all
                            shadow-md shadow-slate-500 active:translate-y-[2px] active:shadow-none mt-2 mb-4 hover:cursor-pointer hover:bg-slate-50 hover:text-indigo-500"
                    >
                        {modo === 'add' ? <>Agregar</> : <>Actualizar</>}
                    </button>

            {/***Boton sec. Cancel ***/}
                <button
                    type="button"
                    onClick={onClose}
                    className="group relative inline-flex h-8 w-[100px] items-center justify-center
                        overflow-hidden rounded-md border border-slate-400 bg-indigo-500 px-6 font-medium text-slate-50 transition-all
                        shadow-md shadow-slate-500 active:translate-y-[2px] active:shadow-none mt-2 mb-4 hover:cursor-pointer hover:bg-slate-50 hover:text-indigo-500"
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