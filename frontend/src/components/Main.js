import React, { useState } from "react";

import Card from 'react-bootstrap/Card';

import Filtros from "./Main/Filtros";
import ListaProductos from "./Main/ListaProductos";

import landingVideo from '../assets/video/landingpage.mp4';

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
      <main className="d-flex flex-grow-1">
      <Card
  className="bg-dark text-white w-100 border-0 rounded-0"
  style={{ height: '300px', overflow: 'hidden' }}
>
  <video
    className="card-img"
    autoPlay
    loop
    muted
    playsInline
    style={{
      objectFit: 'cover',
      width: '100%',
      height: '100%',
    }}
  >
    <source src={landingVideo} type="video/mp4" />
    Tu navegador no soporta el elemento de video.
  </video>

  <Card.ImgOverlay className="d-flex align-items-center">
    <div
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: '1rem 2rem',
        borderRadius: '0.5rem',
        maxWidth: '600px',
      }}
    >
      <Card.Title className="fs-1 fw-bold">Flores frescas, momentos inolvidables</Card.Title>
      <Card.Text className="fs-5">
        Descubre arreglos florales únicos, elaborados con pasión y sostenibilidad.
      </Card.Text>
      <Card.Text className="fs-6">Entrega rápida y cuidada en cada detalle</Card.Text>
    </div>
  </Card.ImgOverlay>
</Card>



      </main>
      <main className="d-flex flex-grow-1">
        <Filtros onFilterChange={manejarCambioFiltros} />
        <ListaProductos productos={productosFiltrados} />
      </main>
    </>
  );
}

export default Main;
