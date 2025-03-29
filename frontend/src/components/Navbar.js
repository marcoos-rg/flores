import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function CustomNavbar() {
  return (
    <Navbar expand="lg" bg="light" variant="light" className="shadow-sm">
      <Container>
        {/* Logo o Nombre de la Tienda */}
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
          Flor.es
        </Navbar.Brand>

        {/* Botón de Toggle para versión móvil */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Contenido del Navbar */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="fw-semibold">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/productos" className="fw-semibold">
              Productos
            </Nav.Link>

            {/* Menú desplegable */}
            <NavDropdown title="Categorías" id="nav-dropdown" align="end">
              <NavDropdown.Item as={Link} to="/categoria/rosas">
                Rosas
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categoria/tulipanes">
                Tulipanes
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categoria/lirios">
                Lirios
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categoria/girasoles">
                Girasoles
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/categoria/todas">
                Todas las Flores
              </NavDropdown.Item>
            </NavDropdown>

            {/* Carrito de compras */}
            <Nav.Link as={Link} to="/carrito" className="fw-semibold">
              Carrito
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
