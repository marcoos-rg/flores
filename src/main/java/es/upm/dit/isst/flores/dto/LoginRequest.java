package es.upm.dit.isst.flores.dto;

public class LoginRequest {
    private String email;
    private String contrasena;

    // Constructor vacío necesario para deserialización JSON
    public LoginRequest() {}

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }
}
