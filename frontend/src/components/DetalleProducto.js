import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import CustomNavbar from "./Navbar"
import "../App.css"
import defaultImage from "./default.png"
import { useCart } from "./Main/CartContext";

function DetalleProducto({ productos }) {
  const { id } = useParams(); // Obtiene el ID desde la URL
  const navegar = useNavigate(); // Hook para navegar
  const { añadirAlCarrito } = useCart();

  const producto = productos?.find((p) => p.producto_id?.toString() === id);
  
  if (!producto) {
    return (
      <Container className="text-center mt-5">
        <h2>Producto no encontrado</h2>
      </Container>
    );
  }

  return (
    <>
      <CustomNavbar />
      <div className="main-content">
        <Container className="mt-5">
          <Row className="justify-content-center">
            <Col md={10}>
              <Card
                className="p-5"
                style={{
                  borderRadius: "20px",
                  background: "linear-gradient(to bottom right, #ffffff, #f8f9fa)",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)", 
                }}
              >
                <Row>
                  {/* Imagen del producto */}
                  <Col md={6} className="text-center">
                    <Card.Img
                      variant="top"
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="img-fluid rounded"
                      style={{
                        maxHeight: "500px",
                        maxWidth: "100%",
                        objectFit: "cover",
                        borderRadius: "15px", 
                      }}
                    />
                  </Col>

                  {/* Información del producto */}
                  <Col md={6} className="d-flex flex-column justify-content-between">
                    <Card.Body>
                      <Card.Title
                        className="text-dark fw-bold fs-1 mb-4"
                        style={{ textShadow: "none" }} 
                      >
                        {producto.nombre}
                      </Card.Title>

                      <div className="mb-3">
                        <Badge
                          bg="info"
                          className="me-2"
                          style={{ fontSize: "1rem", padding: "10px" }}
                        >
                          {producto.ocasion}
                        </Badge>
                        <Badge
                          bg="warning"
                          style={{ fontSize: "1rem", padding: "10px" }}
                        >
                          {producto.tipo_flor}
                        </Badge>
                      </div>

                      <Card.Text
                        className="mb-3 text-muted"
                        style={{ fontSize: "1.2rem" }}
                      >
                        <strong>{producto.floricultor?.nota}⭐</strong>
                      </Card.Text>

                      <Card.Text
                        className="mt-3 text-secondary"
                        style={{ fontSize: "1.1rem" }}
                      >
                        <em>{producto.descripcion}</em>
                      </Card.Text>

                      <Card.Text
                        className="fs-3 fw-bold text-success mt-4"
                        style={{ textShadow: "none" }} 
                      >
                        €{producto.precio}
                      </Card.Text>

                      <Card.Text
                        className="d-flex align-items-center mt-4"
                        style={{ fontSize: "1.2rem" }}
                      >
                        {producto.floricultor?.imagen && (
                          <img
                            src={producto.floricultor?.imagen || defaultImage}
                            alt={producto.floricultor?.nombre || "Floricultor"}
                            style={{
                              width: "50px",
                              height: "50px",
                              marginRight: "10px",
                              borderRadius: "50%", // Esto hace la imagen redonda
                              objectFit: "cover", // Esto asegura que la imagen se ajuste bien al círculo
                            }}
                          />
                        )}
                        <strong>{producto.floricultor?.nombre || "Desconocido"}</strong>
                      </Card.Text>
                    </Card.Body>

                    {/* Botones */}
                    <div className="d-flex justify-content-between p-3">
                      <Button
                        variant="success"
                        className="w-50 me-3 py-3"
                        style={{
                          fontSize: "1.2rem", 
                          backgroundColor: "#28a745",
                          borderColor: "#28a745",
                        }}
                        onClick={() => añadirAlCarrito(producto)}
                      >
                        Añadir al carrito
                      </Button>
                      <Button
                        variant="secondary"
                        className="w-50 py-3"
                        onClick={() => navegar("/")}
                        style={{
                          fontSize: "1.2rem", 
                          backgroundColor: "#6c757d",
                          borderColor: "#6c757d",
                        }}
                      >
                        Volver
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}




export default DetalleProducto;


