package es.upm.dit.isst.flores.repository;

import es.upm.dit.isst.flores.model.DetallePedido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DetallePedidoRepository extends JpaRepository<DetallePedido, Long> {
    // Puedes añadir métodos personalizados si los necesitas
}
