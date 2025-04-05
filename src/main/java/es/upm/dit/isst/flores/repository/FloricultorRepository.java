package es.upm.dit.isst.flores.repository;

import es.upm.dit.isst.flores.model.Floricultor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FloricultorRepository extends JpaRepository<Floricultor, Long> {
    Optional<Floricultor> findByEmail(String email);
}
