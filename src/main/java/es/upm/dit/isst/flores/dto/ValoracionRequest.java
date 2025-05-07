package es.upm.dit.isst.flores.dto;

public class ValoracionRequest {
    private Long pedidoId;
    private Long clienteId;
    private int puntuacion;
    private String comentario;
    private Long floricultorId;

    // Getters y setters
    public Long getPedidoId() {
        return pedidoId;
    }

    public void setPedidoId(Long pedidoId) {
        this.pedidoId = pedidoId;
    }

    public Long getClienteId() {
        return clienteId;
    }

    public void setClienteId(Long clienteId) {
        this.clienteId = clienteId;
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

    public Long getFloricultorId() {
        return floricultorId;
    }

    public void setFloricultorId(Long floricultorId) {
        this.floricultorId = floricultorId;
    }
}

