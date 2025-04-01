import React, { useState, useEffect } from "react";
import { Card, Form, Button, Container } from "react-bootstrap";

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

  const [codigoPostal, setCodigoPostal] = useState(0);
  const [codigoPostalInput, setCodigoPostalInput] = useState("");
  const [ciudad, setCiudad] = useState("");

  // Al cargar la página, recuperar de localStorage
  useEffect(() => {
    const cpGuardado = localStorage.getItem("codigoPostal");
    const ciudadGuardada = localStorage.getItem("ciudad");

    if (cpGuardado && ciudadGuardada) {
      setCodigoPostal(parseInt(cpGuardado));
      setCiudad(ciudadGuardada);
    }
  }, []);

  const manejarCambioFiltros = (nuevosFiltros) => {
    setFiltros(nuevosFiltros);
  };

  const manejarEnvioFormulario = (e) => {
    e.preventDefault();
    const codigo = parseInt(codigoPostalInput);
    if (!isNaN(codigo) && codigoPostalInput.length === 5 && ciudad.trim() !== "") {
      setCodigoPostal(codigo);
      setCiudad(ciudad);

      localStorage.setItem("codigoPostal", codigo);
      localStorage.setItem("ciudad", ciudad);
    } else {
      alert("Introduce un código postal de 5 dígitos y una ciudad válida.");
    }
  };

  const cambiarUbicacion = () => {
    localStorage.removeItem("codigoPostal");
    localStorage.removeItem("ciudad");
    setCodigoPostal(0);
    setCiudad("");
    setCodigoPostalInput("");
  };

  const prefijoProvincia = codigoPostal !== 0 ? String(codigoPostal).substring(0, 2) : null;

  const productosFiltrados = productos.filter(producto => {
    const floricultorCP = String(producto.floricultor.codigoPostal).substring(0, 2);
    const coincideProvincia = prefijoProvincia === floricultorCP;

    return (
      coincideProvincia &&
      (filtros.precioMaximo === null || producto.precio <= filtros.precioMaximo) &&
      (filtros.ocasion === null || producto.ocasion.toLowerCase() === filtros.ocasion.toLowerCase()) &&
      (filtros.tipoFlor === null || producto.tipo_flor.toLowerCase() === filtros.tipoFlor.toLowerCase())
    );
  });

  return (
    <>
      <section id="inicio"></section>
      <Navbar fixed="top" bg="transparent" expand="lg" className="text-white" />
      <VideoCard />

      <section id="productos">
        <div style={{ height: '8rem' }} />

        {codigoPostal === 0 ? (
          <Container className="d-flex justify-content-center">
            <Card style={{ width: '30rem' }} className="p-4">
              <Card.Body>
                <Card.Title className="text-center mb-4">¿Dónde quieres enviar tu pedido?</Card.Title>
                <Form onSubmit={manejarEnvioFormulario}>
                  <Form.Group className="mb-3" controlId="formCiudad">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Introduce tu ciudad"
                      value={ciudad}
                      onChange={(e) => setCiudad(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formCodigoPostal">
                    <Form.Label>Código Postal</Form.Label>
                    <Form.Control
                      type="text"
                      maxLength="5"
                      placeholder="Ej: 28001"
                      value={codigoPostalInput}
                      onChange={(e) => setCodigoPostalInput(e.target.value.replace(/\D/g, ''))}
                      required
                    />
                  </Form.Group>

                  <div className="d-grid">
                    <Button variant="primary" type="submit">
                      Ver productos
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Container>
        ) : (
          <>
            <h2 className="text-center my-4">Nuestros Productos en {ciudad}</h2>

            <Container className="text-center mb-3">
              <Button variant="outline-secondary" size="sm" onClick={cambiarUbicacion}>
                Cambiar ubicación
              </Button>
            </Container>

            <Filtros onFilterChange={manejarCambioFiltros} />
            <ListaProductos productos={productosFiltrados} />
          </>
        )}
      </section>

      <div style={{ height: '4rem' }} />
      <section id="contacto"></section>
      <div style={{ height: '2rem' }} />
    </>
  );
}

export default Main;
