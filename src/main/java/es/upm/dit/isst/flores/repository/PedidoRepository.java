package es.upm.dit.isst.flores.repository;

import es.upm.dit.isst.flores.model.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {
    // Puedes añadir métodos personalizados si los necesitas
}
