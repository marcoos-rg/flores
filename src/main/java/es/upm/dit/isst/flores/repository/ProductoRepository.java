package es.upm.dit.isst.flores.repository;

import es.upm.dit.isst.flores.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {
    @Query("SELECT p FROM Producto p WHERE p.floricultor.floricultor_id = :id")
    List<Producto> findByFloricultorId(@Param("id") Long id);
}
