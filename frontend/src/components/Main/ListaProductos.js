import React from "react";
import Producto from "./Producto";
import { Container, Row, Col } from "react-bootstrap";



function ListaProductos({ productos }) {
  return (
    <Container className="mt-4">

      {productos.length === 0 ? (
        <p className="text-center text-muted">
          No hay productos que coincidan con los filtros seleccionados.
        </p>
      ) : (
        <Row className="g-4">
          {productos.map((producto) => (
            <Col key={producto.producto_id} md={4} sm={6} xs={12}>
              <Producto producto={producto} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default ListaProductos;
