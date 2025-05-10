package es.upm.dit.isst.flores.dto;

public class ValoracionResponse {
    private Long valoracionId;
    private int nota;
    private String nombreCliente;

    public ValoracionResponse(Long valoracionId, int nota, String nombreCliente) {
        this.valoracionId = valoracionId;
        this.nota = nota;
        this.nombreCliente = nombreCliente;
    }

    public Long getValoracionId() {
        return valoracionId;
    }

    public int getNota() {
        return nota;
    }

    public String getNombreCliente() {
        return nombreCliente;
    }
}
