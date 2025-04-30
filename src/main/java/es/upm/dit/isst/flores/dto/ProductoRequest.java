package es.upm.dit.isst.flores.dto;

public class ProductoRequest {
    private Long floricultorId;
    private String nombre;
    private String descripcion;
    private String imagen;
    private double precio;
    private String ocasion;
    private String tipoFlor;
    private boolean destacado;

    // Getters y Setters
    public Long getFloricultorId() {
        return floricultorId;
    }

    public void setFloricultorId(Long floricultorId) {
        this.floricultorId = floricultorId;
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

    public String getTipoFlor() {
        return tipoFlor;
    }

    public void setTipoFlor(String tipoFlor) {
        this.tipoFlor = tipoFlor;
    }

    public boolean isDestacado() {
        return destacado;
    }

    public void setDestacado(boolean destacado) {
        this.destacado = destacado;
    }
}
