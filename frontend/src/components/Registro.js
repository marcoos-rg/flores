import React, { useState, useEffect } from "react";
import CustomNavbar from "./Navbar";
import { Container, Card, Form, Button, Col, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Registro() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("cliente");
  const [mensaje, setMensaje] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleRegistro = async () => {
    try {
      const response = await fetch("http://localhost:8080/auth/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, contrasena, tipoUsuario })
      });

      if (response.ok) {
        setMensaje("¡Registro exitoso! Serás redirigido al login.");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        const text = await response.text();
        setMensaje("Error: " + text);
      }
    } catch (error) {
      setMensaje("Error de conexión con el servidor.");
    }
  };

  return (
    <>
      <CustomNavbar />
      <div style={{ height: '2rem' }} />
      <Container fluid className="d-flex justify-content-center align-items-center" style={{ minHeight: isMobile ? "auto" : "90vh", paddingTop: "4rem", paddingBottom: "2rem" }}>
        <Card
          className="w-100 shadow-lg d-flex flex-column flex-md-row"
          style={{
            width: "90%",
            maxWidth: "1200px",
            minHeight: isMobile ? "auto" : "80vh"
          }}
        >
          {/* LADO IZQUIERDO: Imagen */}
          <Col md={6} className="position-relative d-none d-md-block p-0">
            <Card.Img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80"
              alt="Flores de fondo"
              className="h-100 w-100"
              style={{ objectFit: "cover" }}
            />
            <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
              <Card.Title className="text-white display-5 fw-bold">Únete a Flor.es</Card.Title>
              <Card.Text className="text-white mt-3 fs-5" style={{ maxWidth: "85%" }}>
                Regístrate para comenzar a gestionar tus pedidos y conectarte con los floricultores de tu zona.
              </Card.Text>
            </Card.ImgOverlay>
          </Col>

          {/* LADO DERECHO: Formulario */}
          <Col xs={12} md={6} className="d-flex align-items-center p-4">
            <div className="w-100">
              <h3 className="text-center mb-4">Registro</h3>
              <Form>
                <Form.Group className="mb-3" controlId="formNombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Tu nombre completo"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Introduce tu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Crea una contraseña"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTipoUsuario">
                  <Form.Label>Tipo de usuario</Form.Label>
                  <Form.Select
                    value={tipoUsuario}
                    onChange={(e) => setTipoUsuario(e.target.value)}
                  >
                    <option value="cliente">Cliente</option>
                    <option value="productor">Productor</option>
                  </Form.Select>
                </Form.Group>

                <div className="d-grid mb-3">
                  <Button variant="dark" onClick={handleRegistro}>
                    Registrarme
                  </Button>
                </div>

                {mensaje && (
                  <Alert variant={mensaje.startsWith("¡Registro exitoso") ? "success" : "danger"}>
                    {mensaje}
                  </Alert>
                )}

                <div className="text-center mt-4">
                  <p>¿Ya tienes cuenta?</p>
                  <Button variant="outline-dark" size="sm" onClick={() => navigate("/login")}>
                    Inicia sesión aquí
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Card>
      </Container>
    </>
  );
}

export default Registro;
