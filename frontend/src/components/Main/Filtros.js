import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";

function Filtros({ onFilterChange }) {
  const [precioMaximo, setPrecioMaximo] = useState("");
  const [ocasionSeleccionada, setOcasionSeleccionada] = useState("");
  const [tipoFlorSeleccionado, setTipoFlorSeleccionado] = useState("");

  const aplicarFiltros = () => {
    onFilterChange({
      precioMaximo: precioMaximo ? parseFloat(precioMaximo) : null,
      ocasion: ocasionSeleccionada || null,
      tipoFlor: tipoFlorSeleccionado || null
    });
  };

  return (
    <Container className="py-4">
      <Card className="shadow-sm border-0 rounded-4 p-3">
        <Form>
          <div className="d-flex flex-wrap justify-content-between gap-3">
            {/* Filtro por Precio */}
            <Form.Group className="flex-grow-1">
              <Form.Label>Precio Máximo (€)</Form.Label>
              <Form.Control
                type="number"
                value={precioMaximo}
                onChange={(e) => setPrecioMaximo(e.target.value)}
                placeholder="Ej. 50"
              />
            </Form.Group>

            {/* Filtro por Ocasión */}
            <Form.Group className="flex-grow-1">
              <Form.Label>Ocasión</Form.Label>
              <Form.Select
                value={ocasionSeleccionada}
                onChange={(e) => setOcasionSeleccionada(e.target.value)}
              >
                <option value="">Todas</option>
                <option value="San Valentín">San Valentín</option>
                <option value="Cumpleaños">Cumpleaños</option>
                <option value="Bodas">Bodas</option>
                <option value="Aniversario">Aniversario</option>
                <option value="Amistad">Amistad</option>
                <option value="Regalo">Regalo</option>
                <option value="Luto">Luto</option>
              </Form.Select>
            </Form.Group>

            {/* Filtro por Tipo de Flor */}
            <Form.Group className="flex-grow-1">
              <Form.Label>Tipo de Flor</Form.Label>
              <Form.Select
                value={tipoFlorSeleccionado}
                onChange={(e) => setTipoFlorSeleccionado(e.target.value)}
              >
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

            {/* Botón */}
            <div className="flex-grow-1 d-flex align-items-end">
              <Button
                variant="dark"
                className="w-100 rounded fw-bold"
                onClick={aplicarFiltros}
              >
                Aplicar Filtros
              </Button>
            </div>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

export default Filtros;
