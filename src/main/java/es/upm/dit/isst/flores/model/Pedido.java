package es.upm.dit.isst.flores.model;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;

@Entity
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pedido_id;

    @ManyToOne
    @JoinColumn(name = "cliente_id")
    @JsonIgnoreProperties("pedidos")
    private Cliente cliente;

    @OneToMany(mappedBy = "pedido")
    @JsonManagedReference
    private List<Producto> productos;

    private String estado;
    private String fecha_pedido;
    private String fecha_entrega;
    private String direccion_pedido;
    private double precio;
    private Boolean urgencia;

    // Getter y Setter para 'pedido_id'
    public Long getPedido_id() {
        return pedido_id;
    }

    public void setPedido_id(Long pedido_id) {
        this.pedido_id = pedido_id;
    }

    // Getter y Setter para 'cliente'
    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    // Getter y Setter para 'productos'
    public List<Producto> getProductos() {
        return productos;
    }

    public void setProductos(List<Producto> productos) {
        this.productos = productos;
    }

    // Getter y Setter para 'estado'
    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    // Getter y Setter para 'fecha_pedido'
    public String getFecha_pedido() {
        return fecha_pedido;
    }

    public void setFecha_pedido(String fecha_pedido) {
        this.fecha_pedido = fecha_pedido;
    }

    // Getter y Setter para 'fecha_entrega'
    public String getFecha_entrega() {
        return fecha_entrega;
    }

    public void setFecha_entrega(String fecha_entrega) {
        this.fecha_entrega = fecha_entrega;
    }

    // Getter y Setter para 'direccion_pedido'
    public String getDireccion_pedido() {
        return direccion_pedido;
    }

    public void setDireccion_pedido(String direccion_pedido) {
        this.direccion_pedido = direccion_pedido;
    }

    // Getter y Setter para 'precio'
    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    // Getter y Setter para 'urgencia'
    public Boolean getUrgencia() {
        return urgencia;
    }

    public void setUrgencia(Boolean urgencia) {
        this.urgencia = urgencia;
    }
}
