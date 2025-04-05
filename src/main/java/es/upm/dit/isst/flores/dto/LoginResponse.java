package es.upm.dit.isst.flores.dto;

public class LoginResponse {
    private String tipoUsuario; // "cliente" o "floricultor"
    private Long id;
    private String nombre;

    public LoginResponse(String tipoUsuario, Long id, String nombre) {
        this.tipoUsuario = tipoUsuario;
        this.id = id;
        this.nombre = nombre;
    }

    public String getTipoUsuario() {
        return tipoUsuario;
    }

    public Long getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }
}
