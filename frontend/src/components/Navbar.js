import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "./Main/CartContext";


function CustomNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [usuario, setUsuario] = useState(null);
  const { carrito } = useCart();
  const cantidadTotal = carrito.reduce((sum, p) => sum + p.cantidad, 0);


  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("usuario");
    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado));
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    setUsuario(null);
    navigate("/");
    window.location.reload();
  };

  const handleNavigate = (seccionId) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => {
        const seccion = document.getElementById(seccionId);
        if (seccion) seccion.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const seccion = document.getElementById(seccionId);
      if (seccion) seccion.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="text-white w-100"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
    >
      <Container>
        <Navbar.Brand
          onClick={() => navigate("/")}
          className="text-white fw-bold fs-4"
          style={{ cursor: "pointer" }}
        >
          Flor.es
        </Navbar.Brand>

        {/* Botón hamburguesa visible en móvil */}
        <Navbar.Toggle aria-controls="navbar-nav" className="bg-light" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => handleNavigate("inicio")} className="text-white">Inicio</Nav.Link>
            <Nav.Link onClick={() => handleNavigate("productos")} className="text-white">Productos</Nav.Link>
            <Nav.Link onClick={() => handleNavigate("contacto")} className="text-white">Contacto</Nav.Link>
            <Nav.Link onClick={() => navigate("/carrito")} className="text-white">🛒 Carrito{cantidadTotal > 0 && (<span className="ms-1 badge bg-success">{cantidadTotal}</span>)}</Nav.Link>

            {usuario ? (
              <NavDropdown
                title={<span style={{ color: "white" }} className="fw-bold">{usuario.nombre}</span>}
                menuVariant="dark"
              >
                <NavDropdown.Item onClick={handleLogout}>Cerrar sesión</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link onClick={() => navigate("/login")} className="text-white">Login</Nav.Link>
            )}

          {usuario && usuario.tipoUsuario == "floricultor" && (
            <Nav.Link onClick={() => navigate("/gestioncatalogo")} className="text-white">Gestionar Catálogo</Nav.Link>
          )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
