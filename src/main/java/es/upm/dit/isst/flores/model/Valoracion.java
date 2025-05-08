package es.upm.dit.isst.flores.model;

import jakarta.persistence.*;

@Entity
public class Valoracion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "valoracion_id")
    private Long valoracionId;

    @ManyToOne
    @JoinColumn(name = "cliente_id", nullable = false)
    private Cliente cliente;

    @ManyToOne
    @JoinColumn(name = "floricultor_id", nullable = false)
    private Floricultor floricultor;

    @Column(nullable = false)
    private int nota;

    // Getters y setters

    public Long getValoracionId() {
        return valoracionId;
    }

    public void setValoracionId(Long valoracionId) {
        this.valoracionId = valoracionId;
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

    public int getNota() {
        return nota;
    }

    public void setNota(int nota) {
        this.nota = nota;
    }
}
