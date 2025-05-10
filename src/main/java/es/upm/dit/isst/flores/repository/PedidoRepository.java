package es.upm.dit.isst.flores.repository;

import es.upm.dit.isst.flores.model.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {
    @Query("SELECT p FROM Pedido p WHERE p.cliente.cliente_id = :clienteId")
    List<Pedido> findByClienteId(@Param("clienteId") Long clienteId);
    @Query("SELECT p FROM Pedido p JOIN p.detalles d WHERE d.producto.floricultor.floricultor_id = :id")
    List<Pedido> findByFloricultorId(@Param("id") Long id);
}
