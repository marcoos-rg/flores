import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Container, Spinner } from "react-bootstrap";
import FormularioValoracion from "./FormularioValoracion";
import CustomNavbar from "../Navbar"

const MisPedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);

  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const clienteId = usuario?.tipoUsuario === "cliente" ? usuario.id : null;

  const cargarPedidos = () => {
    if (!clienteId) return;

    setLoading(true);
    axios.get(`http://localhost:8080/api/pedidos/cliente/${clienteId}`)
      .then(res => setPedidos(res.data))
      .catch(err => console.error("Error al cargar pedidos:", err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    cargarPedidos();
  }, [clienteId]);

  if (!clienteId) {
    return <Container className="mt-5"><p>Debes iniciar sesión como cliente.</p></Container>;
  }

  return (
    <>
    <CustomNavbar />
    <Container className="mt-5 pt-5">
      <h2 className="mb-4">📦 Mis Pedidos</h2>
      {loading ? (
        <Spinner animation="border" />
      ) : pedidos.length === 0 ? (
        <p>No has realizado pedidos aún.</p>
      ) : (
        pedidos.map(pedido => (
          <Card className="mb-4 p-3" key={pedido.pedido_id}>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5>{pedido.detalles?.[0]?.producto?.nombre || "Producto"}</h5>
                <p>Estado: <strong>{pedido.estado}</strong></p>
                <p>Floricultor: {pedido.detalles?.[0]?.producto?.floricultor?.nombre || "?"}</p>
              </div>
              <img
                src={pedido.detalles?.[0]?.producto?.imagen}
                alt={pedido.detalles?.[0]?.producto?.nombre}
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
            </div>

            {pedido.estado === "ENTREGADO" && !pedido.valoracion && (
              <FormularioValoracion
                pedidoId={pedido.pedido_id}
                floricultorId={pedido.detalles?.[0]?.producto?.floricultor?.floricultor_id}
                onValoracionEnviada={cargarPedidos}
              />
            )}

            {pedido.valoracion && (
              <p className="mt-2 text-success">✅ Ya valoraste este pedido</p>
            )}
          </Card>
        ))
      )}
    </Container>
    </>
  );
};

export default MisPedidos;
