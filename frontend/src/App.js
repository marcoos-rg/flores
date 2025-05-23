// Punto de Inicio de la Aplicación Frontend
// Para arrancar, navegar a la carpeta 'frontend' y ejecutar 'npm start'

import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './components/Main';
import Footer from './components/Footer';
import DetalleProducto from './components/DetalleProducto';
import Login from "./components/Login";
import Registro from "./components/Registro";
import { CartProvider } from "./components/Main/CartContext";
import Carrito from "./components/Main/Carrito";
import GestionCatalogo from "./components/Main/GestionCatalogo";
import MisPedidos from "./components/Main/MisPedidos";


function App() {
  const [productos, setProductos] = useState([]); // Inicializa los productos como vacíos

  useEffect(() => {
    axios.get("http://localhost:8080/api/productos") // Carga los productos desde el backend
      .then(respuesta => setProductos(respuesta.data))
      .catch(error => console.error("Error al cargar los productos:", error));
  }, []);

  return (
    <CartProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Routes>
            <Route path="/" element={<Main productos={productos} />} />
            <Route path="/producto/:id" element={<DetalleProducto productos={productos} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/carrito" element={<Carrito />} /> 
            <Route path="/gestioncatalogo" element={<GestionCatalogo />} />
            <Route path="/mis-pedidos" element={<MisPedidos />} />
            {/* {user && user.tipo === "floricultor" && (
              <Route path="/gestioncatalogo" element={<GestionCatalogo />} />
            )}  */}


          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
