import React, { useState } from "react";

import Filtros from "./Main/Filtros";
import ListaProductos from "./Main/ListaProductos";
import VideoCard from "./Main/VideoCard";
import Navbar from "./Navbar";


function Main({ productos }) {
  const [filtros, setFiltros] = useState({
    precioMaximo: null,
    ocasion: null,
    tipoFlor: null
  });

  const manejarCambioFiltros = (nuevosFiltros) => {
    setFiltros(nuevosFiltros);
  };

  const productosFiltrados = productos.filter(producto => {
    return (
      (filtros.precioMaximo === null || producto.precio <= filtros.precioMaximo) &&
      (filtros.ocasion === null || producto.ocasion.toLowerCase() === filtros.ocasion.toLowerCase()) &&
      (filtros.tipoFlor === null || producto.tipo_flor.toLowerCase() === filtros.tipoFlor.toLowerCase())
    );
  });

  return (
    <>
      <section id="inicio"></section>
      <Navbar fixed="top" bg="transparent" expand="lg" className="text-white"/>
      <VideoCard />
      <section id="productos">
      <div style={{ height: '8rem' }} /> {/* Spacer vertical de 4rem */}
        <h2 className="text-center my-4">Nuestros Productos</h2>
        <Filtros onFilterChange={manejarCambioFiltros} />
        <ListaProductos productos={productosFiltrados} />
      </section>
      <div style={{ height: '8rem' }} /> {/* Spacer vertical de 4rem */}
    </>
  );
}

export default Main;
