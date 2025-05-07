import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button, Alert } from "react-bootstrap";

const FormularioValoracion = ({ pedidoId, floricultorId, onValoracionEnviada }) => {
  const [puntuacion, setPuntuacion] = useState(5);
  const [comentario, setComentario] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const clienteId = usuario?.tipoUsuario === "cliente" ? usuario.id : null;

  const enviarValoracion = () => {
    if (!clienteId || !pedidoId || !floricultorId) {
      setError("Faltan datos para enviar la valoración.");
      return;
    }

    axios
      .post("http://localhost:8080/valoraciones", {
        puntuacion,
        comentario,
        pedidoId,
        clienteId,
        floricultorId
      })
      .then(() => {
        setMensaje("¡Valoración enviada correctamente!");
        setComentario("");
        setPuntuacion(5);
        onValoracionEnviada && onValoracionEnviada(); // refrescar lista si se pasa función
      })
      .catch(() => setError("Error al enviar valoración."));
  };

  return (
    <div className="mt-4">
      <h4>Deja tu valoración</h4>
      {mensaje && <Alert variant="success">{mensaje}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}

      <Form>
        <Form.Group>
          <Form.Label>Puntuación (1 a 5)</Form.Label>
          <Form.Select value={puntuacion} onChange={(e) => setPuntuacion(Number(e.target.value))}>
            {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n} ⭐</option>)}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>Comentario</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Escribe tu opinión sobre el pedido..."
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" className="mt-3" onClick={enviarValoracion}>
          Enviar valoración
        </Button>
      </Form>
    </div>
  );
};

export default FormularioValoracion;
