import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListaValoraciones = ({ floricultorId }) => {
    const [valoraciones, setValoraciones] = useState([]);

    useEffect(() => {
        if (!floricultorId) return;

        axios.get(`http://localhost:8080/valoraciones/floricultor/${floricultorId}`)
            .then(res => setValoraciones(res.data))
            .catch(err => console.error("Error al cargar valoraciones:", err));
    }, [floricultorId]);

    return (
        <div>
            <h3 className="mt-5">📝 Valoraciones de Clientes</h3>
            {valoraciones.length === 0 ? (
                <p>No tienes valoraciones aún.</p>
            ) : (
                valoraciones.map((val, idx) => (
                    <div key={idx} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
                        <strong>{val.nota} ⭐</strong>
                        <p>Cliente ID: {val.cliente.cliente_id}</p>
                        <small>Valoración ID: {val.valoracionId}</small>
                    </div>
                ))
            )}
        </div>
    );
};

export default ListaValoraciones;
