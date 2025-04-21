// src/Components/Main/Carrito.js
import React, { useState } from "react";
import { Container, Table, Button, Alert } from "react-bootstrap";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar"; // Ajusta la ruta si tu navbar está en otro sitio

function Carrito() {
  const { carrito, quitarDelCarrito, vaciarCarrito } = useCart();
  const navegar = useNavigate();
  
  // Estado para la alerta
  const [showAlert, setShowAlert] = useState(false);

  // Lógica para verificar si el usuario está logueado
  const usuarioGuardado = localStorage.getItem("usuario");
  const usuario = usuarioGuardado ? JSON.parse(usuarioGuardado) : null;

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const handlePago = () => {
    if (usuario) {
      // Si está logueado, no hace nada (puedes agregar más lógica aquí si lo deseas)
      setShowAlert(true);
    } else {
      // Si no está logueado, muestra la alerta y redirige después de un breve retraso
      setShowAlert(true);
      setTimeout(() => {
        navegar("/login");
      }, 1000); // Redirige después de 2 segundos
    }
  };

  return (
    <>
      <Navbar />
      <Container className="mt-5 pt-5 mb-5 p-4 shadow rounded bg-light">
        <h2 className="mb-4 text-center">🛒 Tu carrito de compras</h2>

        {showAlert && !usuario && (
          <Alert 
          variant="warning" 
          onClose={() => setShowAlert(false)} 
          dismissible
          className="text-dark shadow-lg rounded-3 p-3"
          style={{
            backgroundColor: '#fff3cd', 
            borderColor: '#ffeeba',
            color: '#856404',
          }}
        >
          <Alert.Heading className="fw-bold" style={{ color: '#856404' }}>No estás logueado</Alert.Heading>
          <p>Para proceder con el pago, debes iniciar sesión.</p>
        </Alert>
        
        )}

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
              <Button variant="success" onClick={handlePago}>
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
