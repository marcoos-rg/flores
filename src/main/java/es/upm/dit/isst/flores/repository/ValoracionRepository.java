package es.upm.dit.isst.flores.repository;

import es.upm.dit.isst.flores.model.Valoracion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ValoracionRepository extends JpaRepository<Valoracion, Long> {

    @Query("SELECT v FROM Valoracion v WHERE v.floricultor.floricultor_id = :id")
    List<Valoracion> findByFloricultorId(@Param("id") Long id);
}
