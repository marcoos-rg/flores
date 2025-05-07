package es.upm.dit.isst.flores.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Valoracion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;

    @ManyToOne
    @JoinColumn(name = "floricultor_id")
    private Floricultor floricultor;

    @ManyToOne
    @JoinColumn(name = "pedido_id")
    private Pedido pedido;

    private int puntuacion;
    private String comentario;
    private LocalDateTime fechaCreacion;

    // Getters y setters

    public Long getId() {
        return id;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public Floricultor getFloricultor() {
        return floricultor;
    }

    public void setFloricultor(Floricultor floricultor) {
        this.floricultor = floricultor;
    }

    public Pedido getPedido() {
        return pedido;
    }

    public void setPedido(Pedido pedido) {
        this.pedido = pedido;
    }

    public int getPuntuacion() {
        return puntuacion;
    }

    public void setPuntuacion(int puntuacion) {
        this.puntuacion = puntuacion;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public LocalDateTime getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(LocalDateTime fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }
}
