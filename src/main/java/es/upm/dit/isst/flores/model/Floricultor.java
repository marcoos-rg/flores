package es.upm.dit.isst.flores.model;

import jakarta.persistence.*;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Floricultor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long floricultor_id;

    private String nota;
    private String email;
    private String contrasena;
    private String nombre;
    private String imagen;
    private Long codigo_postal;
    private String direccion;

    @OneToMany(mappedBy = "floricultor")
    @JsonManagedReference
    private List<Producto> productos;

    // Getters y Setters...

    public Long getFloricultor_id() {
        return floricultor_id;
    }

    public void setFloricultor_id(Long floricultor_id) {
        this.floricultor_id = floricultor_id;
    }

    public String getNota() {
        return nota;
    }

    public void setNota(String nota) {
        this.nota = nota;
    }

    // Getter y Setter para 'email'
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    // Getter y Setter para 'contrasena'
    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    // Getter y Setter para 'nombre'
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    // Getter y Setter para 'imagen'
    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    // Getter y Setter para 'codigo_postal'
    public Long getCodigoPostal() {
        return codigo_postal;
    }

    public void setCodigoPostal(Long codigo_postal) {
        this.codigo_postal = codigo_postal;
    }

    // Getter y Setter para 'direccion'
    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public List<Producto> getProductos() {
        return productos;
    }

    public void setProductos(List<Producto> productos) {
        this.productos = productos;
    }
}
