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
                valoraciones.map((val) => (
                    <div key={val.valoracionId} className="rounded border p-3 mb-3 shadow-sm">
                        <h5 className="mb-1">{val.nombreCliente || 'Cliente anónimo'}</h5>
                        <p className="mb-1">Nota: <strong>{val.nota} ⭐</strong></p>
                        <small>ID Valoración: {val.valoracionId}</small>
                    </div>
                ))
                
            )}
        </div>
    );
};

export default ListaValoraciones;
