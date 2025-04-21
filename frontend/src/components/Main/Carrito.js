// src/Components/Main/Carrito.js
import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar"; // Ajusta si tu Navbar está en otra ruta

function Carrito() {
  const { carrito, quitarDelCarrito, vaciarCarrito } = useCart();
  const navegar = useNavigate();

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <>
      <Navbar />
      <Container style={{ marginTop: "6rem" }} className="pt-5 mb-5 p-4 shadow rounded bg-light">

        <h2 className="mb-4 text-center">🛒 Tu carrito de compras</h2>

        {carrito.length === 0 ? (
          <p className="text-center">Tu carrito está vacío.</p>
        ) : (
          <>
            <Table bordered hover responsive className="bg-white">
              <thead className="table-dark text-center">
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {carrito.map(item => (
                  <tr key={item.producto_id} className="align-middle text-center">
                    <td>{item.nombre}</td>
                    <td>€{item.precio.toFixed(2)}</td>
                    <td>{item.cantidad}</td>
                    <td>€{(item.precio * item.cantidad).toFixed(2)}</td>
                    <td>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => quitarDelCarrito(item.producto_id)}
                      >
                        Quitar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <h4 className="text-end mt-4">Total: <strong>€{total.toFixed(2)}</strong></h4>

            <div className="d-flex justify-content-center gap-3 mt-4">
              <Button variant="secondary" onClick={() => navegar("/")}>
                🛍️ Seguir comprando
              </Button>
              <Button variant="warning" onClick={vaciarCarrito}>
                🗑️ Vaciar carrito
              </Button>
              <Button variant="success">
                💳 Pagar
              </Button>
            </div>
          </>
        )}
      </Container>
    </>
  );
}

export default Carrito;
