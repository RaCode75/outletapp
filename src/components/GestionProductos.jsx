import { useState, useContext } from "react";
import { useFilteredProducts } from "../hooks/useFilteredProducts";
import { usePagination } from "../hooks/usePagination";
import { useProductsContext } from "../context/ProductsContext";
import { BusquedaContext } from "../context/BusquedaContext";
import Card from "./Card";
import CirclePlus from "../assets/CirclePlus";
import SquarePen from "../assets/SquarePen";
import TrashIcon from "../assets/TrashIcon";
import ProductForm from "./ProductForm";
import Buscador from "../components/Buscador";
import { useEffect } from "react";

const GestionProductos = () => {
  // Cargando contexto de producto
  const { productos, eliminarProducto } = useProductsContext();
  // Estados 
  const [mostrarForm, setViewForm] = useState(false);
  const [modoFormulario, setFormMode] = useState("add");
  const [productoSeleccionado, setSelectProduct] = useState(null);
  //Busqueda
  const { busqueda } = useContext(BusquedaContext);
  const filterProducts = useFilteredProducts(productos, busqueda);

  //Pagination
  const {
    currentPage,
    totalPages,
    currentItems: currentProducts,
    nextPage,
    prevPage,
    resetPage
  } = usePagination(filterProducts, 8);
  
  useEffect(() => {
    resetPage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [busqueda]);




  // Abrir formulario para AGREGAR
  const openAddForm = () => {
    setFormMode("add");
    setSelectProduct(null); // Sin producto inicial
    setViewForm(true);
  };

  // Abrir formulario para EDITAR
  const openEditForm = (producto) => {
    setFormMode("edit");
    setSelectProduct(producto); // Pasar el producto a editar
    setViewForm(true);
  };

  // Cerrar formulario
  const cerrarFormulario = () => {
    setViewForm(false);
    setSelectProduct(null);
  };

  return (
    <div className=''>
      <div className=''>
        <div className='flex flex-row w-full justify-around bg-slate-300 py-2'>
           <h2 className="text-lg font-semibold text-slate-800">Lista de Productos</h2>
           <div className="">
            <button
              onClick={openAddForm}
              className='flex items-center hover:cursor-pointer text-slate-800'
            >
              <CirclePlus />
              <p className="ml-2 text-lg font-semibold">Agregar Producto</p>
            </button>
          </div>
        </div>
                <Buscador />
        
        <div>
          {currentProducts.length === 0 ? (
            <p>No hay productos</p>
          ) : (
            <div className="grid grid-cols-2 gap-10 justify-center items-center md:grid-cols-3 lg:grid-cols-4 py-4">
              {currentProducts.map((producto) => (
                <div
                  key={producto.id}
                  className='m-auto'
                >                 
                  <Card data={producto} />

                <div className="flex justify-between mx-1"> 
                    <button 
                      className='pl-4' 
                      onClick={() => openEditForm(producto)}
                    >
                    <SquarePen />
                    </button>
                    <button 
                      className='pr-4' 
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
          {/* PAGINACION */}
        <div className="flex justify-center gap-4 mt-4 pb-4 bg-slate-100">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 font-bold bg-slate-500 text-white rounded transition-all
                      shadow-md shadow-slate-50 hover:cursor-pointer hover:bg-slate-50 hover:shadow-slate-500 hover:text-slate-500
                      disabled:hover:bg-slate-300 disabled:hover:text-white disabled:hover:cursor-not-allowed disabled:bg-slate-300"
                    >
                    Anterior
                </button>

                <span className="text-lg font-bold text-slate-500">
                    {currentPage} / {totalPages}
                </span>

                <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 font-bold bg-slate-500 text-white rounded transition-all
                      shadow-md shadow-slate-50 hover:cursor-pointer hover:bg-slate-50 hover:shadow-slate-500 hover:text-slate-500
                      disabled:hover:bg-slate-300 disabled:hover:text-white disabled:hover:cursor-not-allowed disabled:bg-slate-300"
                    >
                        Siguiente
                    </button>
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