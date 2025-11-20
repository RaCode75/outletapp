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
        <div className=''>
          <div className="" ></div>
           <h2>Lista de Productos</h2>
        {/* Botón para agregar producto */}
        <button
          onClick={abrirFormularioAgregar}
          className={''}
        >
          <CirclePlus />
          <p>Agregar Producto</p>
        </button>
        </div>
        {/* Lista de productos */}
        <div>
          {productos.length === 0 ? (
            <p>No hay productos</p>
          ) : (
            <div className="grid grid-cols-4 gap-2 p-4">
              {productos.map((producto) => (
                <div
                  key={producto.id}
                  className=''
                >                 
                  <Card data={producto} />

                  {/* Botones para editar y eliminar este producto */}
                  <button 
                    className={''} 
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
              ))}
            </div>
          )}
        </div>

        {/* Modal - Formulario condicional */}
        {mostrarForm && (
          <>
              {/* Pasar los props correctos según el modo */}
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