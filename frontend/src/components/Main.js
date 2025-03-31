import React, { useState } from "react";

import Filtros from "./Main/Filtros";
import ListaProductos from "./Main/ListaProductos";
import VideoCard from "./Main/VideoCard";
import Navbar from "./Navbar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

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
      <section id="contactos">
    <Container className="mt-5">
      <Row className="gx-3 gy-4 justify-content-center">
        {[
          { title: 'Síguenos en Instagram!', button: "Link a Instagram", color: 'dark'},
          { title: 'Síguenos en Facebook!', button: "Link a Facebook", color: "dark" },
          { title: 'Contáctanos por email!', button: "Email", color: "dark" },
          { title: 'Contáctanos por teléfono!', button: "LLámanos", color: "dark" },
        ].map((item, index) => (
          <Col key={index} xs={12} md={6} className="d-flex justify-content-center">
            <Card className="text-center shadow-lg" style={{ width: '30rem', height: '10rem' }}>
              <Card.Header className="fw-bold">{item.title}</Card.Header>
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Button variant={item.color}>{item.button}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
      </section>
      <div style={{ height: '8rem' }} /> {/* Spacer vertical de 4rem */}
    </>
  );
}

export default Main;
