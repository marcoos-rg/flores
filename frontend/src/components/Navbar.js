import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function CustomNavbar() {
  return (
    <Navbar
      variant="light"
      expand="lg"
      fixed="top"
      className="text-white w-100"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Fondo negro semitransparente
      }}
    >
      <Container>
        <Navbar.Brand href="#home" className="text-white fw-bold fs-4">Flor.es</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#inicio" className="text-white">Inicio</Nav.Link>
          <Nav.Link href="#productos" className="text-white">Productos</Nav.Link>
          <Nav.Link href="#contacto" className="text-white">Contacto</Nav.Link>
          <Nav.Link href="#contacto" className="text-white">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
