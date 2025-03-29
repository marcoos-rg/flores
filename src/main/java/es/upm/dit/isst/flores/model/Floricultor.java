package es.upm.dit.isst.flores.model;

import jakarta.persistence.*;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Floricultor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long floricultor_id;

    private String nombre;

    // Si quieres, más adelante puedes añadir email, contraseña, etc.

    @OneToMany(mappedBy = "floricultor")
    @JsonManagedReference
    private List<Producto> productos;

    // Getters y Setters

    public Long getFloricultor_id() {
        return floricultor_id;
    }

    public void setFloricultor_id(Long floricultor_id) {
        this.floricultor_id = floricultor_id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public List<Producto> getProductos() {
        return productos;
    }

    public void setProductos(List<Producto> productos) {
        this.productos = productos;
    }
}
