import React, { useState } from "react";

import Filtros from "./Main/Filtros";
import ListaProductos from "./Main/ListaProductos";
import VideoCard from "./Main/VideoCard";
import Navbar from "./Navbar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

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
      <Card className="text-center">
      <Card.Header>Follow us on Instagram!</Card.Header>
      <Card.Body>
        <Card.Title>Find below a link to our Instagram profile</Card.Title>
        <Button variant="primary">Flor.es's Instagram</Button>
      </Card.Body>
    </Card>
    <Card className="text-center">
      <Card.Header>Follow us on Facebook!</Card.Header>
      <Card.Body>
        <Card.Title>Find below a link to our Facebook profile</Card.Title>
        <Button variant="primary">Flor.es's Facebook</Button>
      </Card.Body>
    </Card>
    <Card className="text-center">
      <Card.Header>Contact us via email!</Card.Header>
      <Card.Body>
        <Card.Title>Find below a link to our email</Card.Title>
        <Button variant="primary">Flor.es's email</Button>
      </Card.Body>
    </Card>
    <Card className="text-center">
      <Card.Header>Contact us via phone call!</Card.Header>
      <Card.Body>
        <Card.Title>Find below a button to call us</Card.Title>
        <Button variant="primary">Call Flor.es</Button>
      </Card.Body>
    </Card>
    <Container className="mt-5">
      <Row className="gx-4 gy-4 justify-content-center">
        {[
          { title: 'Follow us on Instagram!', button: "Flor.es's Instagram" },
          { title: 'Follow us on Facebook!', button: "Flor.es's Facebook" },
          { title: 'Contact us via email!', button: "Flor.es's email" },
          { title: 'Contact us via phone call!', button: "Call Flor.es" },
        ].map((item, index) => (
          <Col key={index} xs={12} md={6}>
            <Card className="text-center shadow-lg" style={{ aspectRatio: '1 / 1' }}>
              <Card.Header>{item.title}</Card.Header>
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title className="mb-3">Find below a link</Card.Title>
                <Button variant="primary">{item.button}</Button>
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
