import React, { useState, useEffect } from "react";
import { Container, Table, Button, Form, Modal } from "react-bootstrap";
import axios from "axios";
import Navbar from "../Navbar";
import ListaValoraciones from "./ListaValoraciones";

function GestionCatalogo() {
  const [catalogo, setCatalogo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [nuevoRamo, setNuevoRamo] = useState({
    nombre: "",
    precio: 0,
    tipoFlor: "",
    descripcion: "",
    ocasion: "",
    imagen: "",
  });

  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const floricultorId =
    usuario?.tipoUsuario === "floricultor" ? usuario.id : null;

  useEffect(() => {
    if (floricultorId) {
      axios
        .get(`http://localhost:8080/api/productos/floricultor/${floricultorId}`)
        .then((response) => setCatalogo(response.data))
        .catch((error) => console.error("Error al cargar catálogo:", error));
    }
  }, [floricultorId]);

  const agregarRamo = () => {
    const ramoAEnviar = {
      nombre: nuevoRamo.nombre,
      precio: nuevoRamo.precio,
      tipoFlor: nuevoRamo.tipoFlor,
      descripcion: nuevoRamo.descripcion,
      ocasion: nuevoRamo.ocasion,
      imagen: nuevoRamo.imagen,
      floricultorId: floricultorId,
      destacado: false,
    };

    axios
      .post("http://localhost:8080/api/productos", ramoAEnviar)
      .then(() =>
        axios.get(
          `http://localhost:8080/api/productos/floricultor/${floricultorId}`
        )
      )
      .then((response) => {
        setCatalogo(response.data);
        setNuevoRamo({
          nombre: "",
          precio: 0,
          tipo_flor: "",
          descripcion: "",
          ocasion: "",
          imagen: "",
        });
        setShowModal(false);
      })
      .catch((error) => console.error("Error al crear ramo:", error));
  };

  const quitarRamo = (id) => {
    axios
      .delete(`http://localhost:8080/api/productos/${id}`)
      .then(() => {
        setCatalogo(catalogo.filter((ramo) => ramo.producto_id !== id));
      })
      .catch((error) => console.error("Error al eliminar ramo:", error));
  };

  return (
    <>
      <Navbar />
      <Container className="mt-5 pt-5 mb-5 p-4 shadow rounded bg-light">
        <h2 className="mb-4 text-center">🌸 Gestión del Catálogo de Ramos</h2>

        <Button
          variant="primary"
          className="mb-4"
          onClick={() => setShowModal(true)}
        >
          ➕ Agregar Ramo
        </Button>

        {catalogo.length === 0 ? (
          <p className="text-center">El catálogo está vacío.</p>
        ) : (
          <Table bordered hover responsive className="bg-white">
            <thead className="table-dark text-center">
              <tr>
                <th>Ramo</th>
                <th>Precio</th>
                <th>Tipo de Flor</th>
                <th>Descripción</th>
                <th>Ocasión</th>
                <th>Imagen</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {catalogo.map((ramo) => (
                <tr key={ramo.producto_id} className="align-middle text-center">
                  <td>{ramo.nombre}</td>
                  <td>€{ramo.precio.toFixed(2)}</td>
                  <td>{ramo.tipo_flor}</td>
                  <td>{ramo.descripcion}</td>
                  <td>{ramo.ocasion}</td>
                  <td>
                    {ramo.imagen ? (
                      <img
                        src={ramo.imagen}
                        alt={ramo.nombre}
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      "No disponible"
                    )}
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => quitarRamo(ramo.producto_id)}
                    >
                      Quitar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}

        {floricultorId && (
          <div className="mt-5">
            <ListaValoraciones floricultorId={floricultorId} />
          </div>
        )}
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Nuevo Ramo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre del Ramo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ejemplo: Ramo de Rosas"
                value={nuevoRamo.nombre}
                onChange={(e) =>
                  setNuevoRamo({ ...nuevoRamo, nombre: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Precio (€)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ejemplo: 25.00"
                value={nuevoRamo.precio}
                onChange={(e) =>
                  setNuevoRamo({
                    ...nuevoRamo,
                    precio: parseFloat(e.target.value) || 0,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tipo de Flor</Form.Label>
              <Form.Select
                value={nuevoRamo.tipoFlor}
                onChange={(e) =>
                  setNuevoRamo({ ...nuevoRamo, tipoFlor: e.target.value })
                }
              >
                <option value="">Seleccione un tipo de flor</option>
                <option value="Tulipanes">Tulipanes</option>
                <option value="Lirios">Lirios</option>
                <option value="Peonias">Peonias</option>
                <option value="Girasoles">Girasoles</option>
                <option value="Orquídeas">Orquídeas</option>
                <option value="Margaritas">Margaritas</option>
                <option value="Mix de Flores">Mix de Flores</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ejemplo: Un hermoso ramo de rosas rojas."
                value={nuevoRamo.descripcion}
                onChange={(e) =>
                  setNuevoRamo({ ...nuevoRamo, descripcion: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ocasión</Form.Label>
              <Form.Select
                value={nuevoRamo.ocasion}
                onChange={(e) =>
                  setNuevoRamo({ ...nuevoRamo, ocasion: e.target.value })
                }
              >
                <option value="">Seleccione una ocasión</option>
                <option value="San Valentín">San Valentín</option>
                <option value="Cumpleaños">Cumpleaños</option>
                <option value="Bodas">Bodas</option>
                <option value="Aniversario">Aniversario</option>
                <option value="Amistad">Amistad</option>
                <option value="Regalo">Regalo</option>
                <option value="Luto">Luto</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>URL de la Imagen</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ejemplo: https://example.com/imagen.jpg"
                value={nuevoRamo.imagen}
                onChange={(e) =>
                  setNuevoRamo({ ...nuevoRamo, imagen: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={agregarRamo}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default GestionCatalogo;
