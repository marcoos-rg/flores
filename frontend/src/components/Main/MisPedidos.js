import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container, Spinner } from "react-bootstrap";
import FormularioValoracion from "./FormularioValoracion";
import CustomNavbar from "../Navbar";

const MisPedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);

  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const tipoUsuario = usuario?.tipoUsuario;
  const usuarioId = usuario?.id;

  const cargarPedidos = () => {
    if (!usuarioId || !tipoUsuario) return;

    setLoading(true);
    const url =
      tipoUsuario === "cliente"
        ? `http://localhost:8080/api/pedidos/cliente/${usuarioId}`
        : `http://localhost:8080/api/pedidos/floricultor/${usuarioId}`;

    axios
      .get(url)
      .then((res) => setPedidos(res.data))
      .catch((err) => console.error("Error al cargar pedidos:", err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    cargarPedidos();
  }, [usuarioId, tipoUsuario]);

  if (!usuarioId || !tipoUsuario) {
    return (
      <Container className="mt-5">
        <p>Debes iniciar sesión para ver tus pedidos.</p>
      </Container>
    );
  }

  return (
    <>
      <CustomNavbar />
      <Container className="mt-5 pt-5">
        <h2 className="mb-4">
          📦 {tipoUsuario === "cliente" ? "Mis Pedidos" : "Pedidos Recibidos"}
        </h2>

        {loading ? (
          <Spinner animation="border" />
        ) : pedidos.length === 0 ? (
          <p>
            {tipoUsuario === "cliente"
              ? "No has realizado pedidos aún."
              : "Aún no has recibido pedidos."}
          </p>
        ) : (
          pedidos.map((pedido) => (
            <Card
              className="mb-4 p-3"
              key={pedido.pedido_id}
              style={{
                backgroundColor: pedido.urgencia ? "#ffe5e5" : "white",
                border: pedido.urgencia ? "1px solid #cc0000" : "1px solid #ddd",
              }}
            >
              <h5 className="mb-3">🧾 Pedido: {pedido.pedido_id}</h5>
              <p>Estado: <strong>{pedido.estado}</strong></p>
              <p>Fecha: {pedido.fecha_pedido || "Sin fecha"}</p>
              <p>Dirección: {pedido.direccion_pedido || "No especificada"}</p>

              {pedido.urgencia && (
                <p className="text-danger fw-bold">⚠️ Pedido urgente</p>
              )}

              <div className="row">
                {pedido.detalles?.map((detalle, idx) => (
                  <div key={idx} className="col-md-6 d-flex mb-3">
                    <img
                      src={detalle.producto?.imagen}
                      alt={detalle.producto?.nombre}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        marginRight: "15px",
                      }}
                    />
                    <div>
                      <h6>{detalle.producto?.nombre}</h6>
                      <p>Cantidad: {detalle.cantidad}</p>
                      {tipoUsuario === "cliente" ? (
                        <p>Floricultor: {detalle.producto?.floricultor?.nombre || "?"}</p>
                      ) : (
                        <p>Cliente: {pedido.cliente?.nombre || "?"}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Valoración visible solo para clientes */}
              {tipoUsuario === "cliente" &&
                pedido.estado === "ENTREGADO" &&
                !pedido.valoracion && (
                  <FormularioValoracion
                    pedidoId={pedido.pedido_id}
                    floricultorId={pedido.detalles?.[0]?.producto?.floricultor?.floricultor_id}
                    onValoracionEnviada={cargarPedidos}
                  />
                )}

              {pedido.valoracion && (
                <p className="mt-2 text-success">
                  ✅ {tipoUsuario === "cliente"
                    ? "Ya valoraste este pedido"
                    : "Este pedido fue valorado con " + pedido.valoracion.puntuacion + " ⭐"}
                </p>
              )}
            </Card>
          ))
        )}
      </Container>
    </>
  );
};

export default MisPedidos;
