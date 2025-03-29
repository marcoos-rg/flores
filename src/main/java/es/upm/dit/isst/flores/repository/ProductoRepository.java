package es.upm.dit.isst.flores.repository;

import es.upm.dit.isst.flores.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {
    // Aquí puedes añadir métodos personalizados más adelante si los necesitas
}
