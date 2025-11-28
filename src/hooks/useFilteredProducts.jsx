import { useMemo } from "react";

export const useFilteredProducts = (productos, busqueda) => {
  return useMemo(() => {
    if (!productos) return [];

    const filtro = busqueda.toLowerCase();

    return productos.filter(producto =>
      producto.nombre.toLowerCase().includes(filtro) ||
      producto.categoria?.toLowerCase().includes(filtro) ||
      producto.descripcion?.toLowerCase().includes(filtro) ||
      producto.precio?.toString().includes(filtro)
    );
  }, [productos, busqueda]);
};