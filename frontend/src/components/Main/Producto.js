import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Badge } from "react-bootstrap";

function Producto({ producto }) {
  return (
    <Card className="shadow-lg border-0 rounded-4">
      <Link to={`/producto/${producto.producto_id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <br/>
        <Card.Img
          variant="top"
          src={producto.imagen}
          alt={producto.nombre}
          className="img-fluid"
          style={{ height: "250px", objectFit: "contain"}}
        />

        <Card.Body className="text-center">
          <Card.Title className="fw-bold">{producto.nombre}</Card.Title>

          <div className="mb-2">
            <Badge bg="info" className="me-2">{producto.ocasion}</Badge>
            <Badge bg="warning">{producto.tipo_flor}</Badge>
          </div>

          <Card.Text className="text-muted">
            <strong><span className="text-success fw-bold">€{producto.precio}</span></strong>  <br />
            <strong>{producto.floricultor?.nota}⭐</strong> <br />
          </Card.Text>


        </Card.Body>
      </Link>
    </Card>
  );
}

export default Producto;
