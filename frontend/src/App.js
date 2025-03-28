import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/api/hello")
      .then((res) => {
        setMensaje(res.data.mensaje);
      })
      .catch((err) => {
        console.error("Error al obtener el mensaje:", err);
      });
  }, []);

  return (
    <div>
      <h1>Mensaje del backend:</h1>
      <p>{mensaje}</p>
    </div>
  );
}

export default App;
