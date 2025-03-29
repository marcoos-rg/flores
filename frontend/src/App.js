// Punto de Inicio de la Aplicación Frontend
// Para arrancar, navegar a la carpeta 'frontend' y ejecutar 'npm start'

import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import DetalleProducto from './components/DetalleProducto';

function App() {
  const [productos, setProductos] = useState([]); // Inicializa los productos como vacíos

  useEffect(() => {
    axios.get("http://localhost:8080/api/productos") // Carga los productos desde el backend
      .then(respuesta => setProductos(respuesta.data))
      .catch(error => console.error("Error al cargar los productos:", error));
  }, []);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main productos={productos} />} />
          <Route path="/producto/:id" element={<DetalleProducto productos={productos} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
