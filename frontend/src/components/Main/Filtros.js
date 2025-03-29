import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";

function Filtros({ onFilterChange }) {
  const [precioMaximo, setPrecioMaximo] = useState(""); // Estado para el precio máximo
  const [ocasionSeleccionada, setOcasionSeleccionada] = useState(""); // Estado para la ocasión
  const [tipoFlorSeleccionado, setTipoFlorSeleccionado] = useState(""); // Estado para el tipo de flor

  const aplicarFiltros = () => {
    onFilterChange({
      precioMaximo: precioMaximo ? parseFloat(precioMaximo) : null,
      ocasion: ocasionSeleccionada || null,
      tipoFlor: tipoFlorSeleccionado || null
    });
  };

  return (
    <Container className="p-3" style={{ maxWidth: "350px" }}>
      <Card className="shadow-sm border-0 rounded-4">
        <Card.Body>
          <h5 className="text-center text-primary mb-4">Filtros de Búsqueda</h5>

          {/* Filtro por Precio */}
          <Form.Group className="mb-3">
            <Form.Label>Precio Máximo (€)</Form.Label>
            <Form.Control
              type="number"
              value={precioMaximo}
              onChange={(e) => setPrecioMaximo(e.target.value)}
              placeholder="Ingrese un precio"
            />
          </Form.Group>

          {/* Filtro por Ocasión */}
          <Form.Group className="mb-3">
            <Form.Label>Ocasión</Form.Label>
            <Form.Select value={ocasionSeleccionada} onChange={(e) => setOcasionSeleccionada(e.target.value)}>
              <option value="">Todas</option>
              <option value="San Valentín">San Valentín</option>
              <option value="Cumpleaños">Cumpleaños</option>
              <option value="Bodas">Bodas</option>
              <option value="Aniversario">Aniversario</option>
              <option value="Amistad">Amistad</option>
              <option value="Regalo">Regalo</option>
            </Form.Select>
          </Form.Group>

          {/* Filtro por Tipo de Flor */}
          <Form.Group className="mb-3">
            <Form.Label>Tipo de Flor</Form.Label>
            <Form.Select value={tipoFlorSeleccionado} onChange={(e) => setTipoFlorSeleccionado(e.target.value)}>
              <option value="">Todas</option>
              <option value="Rosas">Rosas</option>
              <option value="Tulipanes">Tulipanes</option>
              <option value="Lirios">Lirios</option>
              <option value="Peonías">Peonías</option>
              <option value="Girasoles">Girasoles</option>
              <option value="Orquídeas">Orquídeas</option>
              <option value="Margaritas">Margaritas</option>
              <option value="Mix de Flores">Mix de Flores</option>
            </Form.Select>
          </Form.Group>

          {/* Botón de Aplicar Filtros */}
          <Button variant="primary" className="w-100 rounded-pill fw-bold" onClick={aplicarFiltros}>
            Aplicar Filtros
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Filtros;
