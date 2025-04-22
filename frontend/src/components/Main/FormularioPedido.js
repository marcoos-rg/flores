import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useCart } from "./CartContext";

function FormularioPedido({ mostrar, onClose, usuario }) {
  const { carrito, vaciarCarrito } = useCart();
  const [direccion, setDireccion] = useState("");
  const [urgente, setUrgente] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const pedido = {
      clienteId: usuario.id,
      direccionEntrega: direccion,
      urgencia: urgente,
      estado: "REALIZADO",
      productos: carrito.map(p => ({
        productoId: p.producto_id,
        cantidad: p.cantidad
      }))
    };

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
          <Form.Group className="mt-3">
            <Form.Check
              type="checkbox"
              label="¿Es urgente?"
              checked={urgente}
              onChange={(e) => setUrgente(e.target.checked)}
            />
          </Form.Group>
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
