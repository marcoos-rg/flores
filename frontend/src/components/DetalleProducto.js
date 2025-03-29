import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

function DetalleProducto({ productos }) {
  const { id } = useParams(); // Obtiene el ID desde la URL
  const navegar = useNavigate(); // Hook para navegar

  const producto = productos?.find(p => p.producto_id?.toString() === id);
  console.log(producto); // Para depuración, muestra el producto encontrado

  if (!producto) {
    return (
      <Container className="text-center mt-5">
        <h2>Producto no encontrado</h2>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg p-4">
            <Row>
              {/* Imagen del producto */}
              <Col md={6} className="text-center">
                <Card.Img
                  variant="top"
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="img-fluid rounded"
                  style={{ maxHeight: "350px", objectFit: "cover" }}
                />
              </Col>

              {/* Información del producto */}
              <Col md={6} className="d-flex flex-column justify-content-between">
                <Card.Body>
                  <Card.Title className="text-primary fw-bold">{producto.nombre}</Card.Title>

                  <Badge bg="info" className="mb-2">{producto.ocasion}</Badge>
                  <Badge bg="warning" className="ms-2 mb-2">{producto.tipo_flor}</Badge>

                  <Card.Text className="mt-3">
                    <strong>Descripción:</strong> {producto.descripcion}
                  </Card.Text>

                  <Card.Text>
                    <strong>Precio:</strong> <span className="text-success fw-bold">€{producto.precio}</span>
                  </Card.Text>

                  <Card.Text>
                    <strong>Valoración:</strong> {producto.rating} ({producto.numeroDeValoraciones} valoraciones)
                  </Card.Text>

                  <Card.Text>
                    <strong>Vendedor:</strong> {producto.floricultor?.nombre || "Desconocido"}
                  </Card.Text>
                </Card.Body>

                {/* Botones */}
                <div className="d-flex justify-content-between p-3">
                  <Button variant="success" className="w-50 me-2">Añadir al carrito</Button>
                  <Button variant="secondary" className="w-50" onClick={() => navegar("/")}>Volver</Button>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DetalleProducto;
