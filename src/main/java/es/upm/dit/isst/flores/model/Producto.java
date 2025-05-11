package es.upm.dit.isst.flores.model;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.*;

@Entity
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long producto_id;

    @ManyToOne
    @JoinColumn(name = "floricultor_id")
    @JsonIgnoreProperties("productos")
    private Floricultor floricultor;

    private String nombre;
    private String descripcion;
    private String imagen;
    private double precio;
    private String ocasion;
    private String tipo_flor;
    // private boolean destacado;

    // Getters y Setters

    public Long getProducto_id() {
        return producto_id;
    }

    public void setProducto_id(Long producto_id) {
        this.producto_id = producto_id;
    }

    public Floricultor getFloricultor() {
        return floricultor;
    }

    public void setFloricultor(Floricultor floricultor) {
        this.floricultor = floricultor;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public String getOcasion() {
        return ocasion;
    }

    public void setOcasion(String ocasion) {
        this.ocasion = ocasion;
    }

    public String getTipo_flor() {
        return tipo_flor;
    }

    public void setTipo_flor(String tipo_flor) {
        this.tipo_flor = tipo_flor;
    }

    // public boolean isDestacado() {
    //     return destacado;
    // }

    // public void setDestacado(boolean destacado) {
    //     this.destacado = destacado;
    // }
}
