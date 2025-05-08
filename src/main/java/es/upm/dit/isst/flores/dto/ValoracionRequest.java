package es.upm.dit.isst.flores.dto;

public class ValoracionRequest {
    private Long clienteId;
    private Long floricultorId;
    private int nota;

    // Getters y setters
    public Long getClienteId() {
        return clienteId;
    }

    public void setClienteId(Long clienteId) {
        this.clienteId = clienteId;
    }

    public Long getFloricultorId() {
        return floricultorId;
    }

    public void setFloricultorId(Long floricultorId) {
        this.floricultorId = floricultorId;
    }

    public int getNota() {
        return nota;
    }

    public void setNota(int nota) {
        this.nota = nota;
    }
}
