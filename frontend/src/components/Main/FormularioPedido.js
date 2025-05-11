import React, { useState } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { useCart } from "./CartContext";

function FormularioPedido({ mostrar, onClose, usuario }) {
  const { carrito, vaciarCarrito } = useCart();
  const [direccion, setDireccion] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [urgente, setUrgente] = useState(false);
  const [fechaEntrega, setFechaEntrega] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const pedido = {
      clienteId: usuario.id,
      direccionEntrega: direccion,
      ciudad: ciudad,
      codigoPostal: codigoPostal,
      urgencia: urgente,
      productos: carrito.map(p => ({
        productoId: p.producto_id,
        cantidad: p.cantidad
      }))
    };

    // Solo añadir fechaEntrega si es urgente y se ha seleccionado
    if (urgente && fechaEntrega) {
      pedido.fechaEntrega = fechaEntrega;
    }

    try {
      const response = await fetch("http://localhost:8080/api/pedidos/nuevo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pedido)
      });

      if (response.ok) {
        alert("¡Pedido realizado con éxito!");
        vaciarCarrito();
        onClose();
      } else {
        alert("Error al realizar el pedido.");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  return (
    <Modal show={mostrar} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Finalizar Pedido</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Dirección de entrega</Form.Label>
            <Form.Control
              type="text"
              required
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          </Form.Group>

          <Row className="mt-3">
            <Col>
              <Form.Group>
                <Form.Label>Ciudad</Form.Label>
                <Form.Control
                  type="text"
                  value={ciudad}
                  onChange={(e) => setCiudad(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Código Postal</Form.Label>
                <Form.Control
                  type="text"
                  value={codigoPostal}
                  onChange={(e) => setCodigoPostal(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mt-3">
            <Form.Check
              type="checkbox"
              label="¿Es urgente?"
              checked={urgente}
              onChange={(e) => setUrgente(e.target.checked)}
            />
          </Form.Group>

          {urgente && (
            <Form.Group className="mt-3">
              <Form.Label>Fecha deseada de entrega</Form.Label>
              <Form.Control
                type="date"
                value={fechaEntrega}
                onChange={(e) => setFechaEntrega(e.target.value)}
              />
            </Form.Group>
          )}

          <div className="mt-4 text-end">
            <Button variant="secondary" onClick={onClose} className="me-2">Cancelar</Button>
            <Button variant="success" type="submit">Confirmar Pedido</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default FormularioPedido;
