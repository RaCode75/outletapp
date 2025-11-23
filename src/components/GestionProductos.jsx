import { useState } from "react";
import { useProductsContext } from "../context/ProductsContext";
import Card from "./Card";
import CirclePlus from "../assets/CirclePlus";
import SquarePen from "../assets/SquarePen";
import TrashIcon from "../assets/TrashIcon";
import ProductForm from "./ProductForm";

const GestionProductos = () => {
  // Cargando contexto de producto
  const { productos, eliminarProducto } = useProductsContext();
  // Estados 
  const [mostrarForm, setMostrarForm] = useState(false);
  const [modoFormulario, setModoFormulario] = useState("add");
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  // Abrir formulario para AGREGAR
  const abrirFormularioAgregar = () => {
    setModoFormulario("add");
    setProductoSeleccionado(null); // Sin producto inicial
    setMostrarForm(true);
  };

  // Abrir formulario para EDITAR
  const abrirFormularioEditar = (producto) => {
    setModoFormulario("edit");
    setProductoSeleccionado(producto); // Pasar el producto a editar
    setMostrarForm(true);
  };

  // Cerrar formulario
  const cerrarFormulario = () => {
    setMostrarForm(false);
    setProductoSeleccionado(null);
  };

  return (
    <div className=''>
      <div className=''>
        <div className='flex flex-row w-full justify-around bg-indigo-100 py-2'>
           <h2>Lista de Productos</h2>
          <div className="">
            <button
              onClick={abrirFormularioAgregar}
              className='flex'
            >
              <CirclePlus />
              <p className="ml-2">Agregar Producto</p>
            </button>
          </div>
        </div>
        
        <div>
          {productos.length === 0 ? (
            <p>No hay productos</p>
          ) : (
            <div className="grid grid-cols-2 gap-10 justify-center items-center md:grid-cols-3 lg:grid-cols-4 py-4">
              {productos.map((producto) => (
                <div
                  key={producto.id}
                  className='m-auto'
                >                 
                  <Card data={producto} />

                <div className="flex justify-between mx-1"> 
                    <button 
                      className='' 
                      onClick={() => abrirFormularioEditar(producto)}
                    >
                    <SquarePen />
                    </button>
                    <button 
                      className={''} 
                      onClick={() => eliminarProducto(producto.id)}
                    >
                    <TrashIcon />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

       
        {mostrarForm && (
          <>
              
              <ProductForm
                productoInicial={productoSeleccionado || {}}
                modo={modoFormulario}
                onClose={cerrarFormulario}
              />
          </>
        )}
      </div>
    </div>
  );
};

export default GestionProductos;