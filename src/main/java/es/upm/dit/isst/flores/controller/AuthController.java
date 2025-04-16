package es.upm.dit.isst.flores.controller;

import es.upm.dit.isst.flores.dto.LoginRequest;
import es.upm.dit.isst.flores.dto.LoginResponse;
import es.upm.dit.isst.flores.model.Cliente;
import es.upm.dit.isst.flores.model.Floricultor;
import es.upm.dit.isst.flores.repository.ClienteRepository;
import es.upm.dit.isst.flores.repository.FloricultorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.List;

import es.upm.dit.isst.flores.dto.RegisterRequest;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*") // Permite peticiones desde cualquier origen (ajusta según sea necesario)
public class AuthController {

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private FloricultorRepository floricultorRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {

        // Buscar por email en tabla de clientes
        Optional<Cliente> clienteOpt = clienteRepository.findByEmail(loginRequest.getEmail());
        if (clienteOpt.isPresent()) {
            Cliente cliente = clienteOpt.get();
            if (passwordEncoder.matches(loginRequest.getContrasena(), cliente.getContrasena())) {
                return ResponseEntity.ok(new LoginResponse("cliente", cliente.getCliente_id(), cliente.getNombre()));
            }
        }

        // Buscar por email en tabla de floricultores
        Optional<Floricultor> floricultorOpt = floricultorRepository.findByEmail(loginRequest.getEmail());
        if (floricultorOpt.isPresent()) {
            Floricultor floricultor = floricultorOpt.get();
            if (passwordEncoder.matches(loginRequest.getContrasena(), floricultor.getContrasena())) {
                return ResponseEntity.ok(new LoginResponse("floricultor", floricultor.getFloricultor_id(), floricultor.getNombre()));
            }
        }

        // Si no encuentra coincidencia o las contraseñas no coinciden
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales incorrectas");
    }

    @PostMapping("/register")
    public ResponseEntity<?> registrarCliente(@RequestBody RegisterRequest request) {
        if (clienteRepository.findByEmail(request.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("El email ya está registrado");
        }

        Cliente nuevoCliente = new Cliente();
        nuevoCliente.setEmail(request.getEmail());
        nuevoCliente.setContrasena(passwordEncoder.encode(request.getContrasena()));
        nuevoCliente.setNombre(request.getNombre());
        nuevoCliente.setImagen(request.getImagen());

        clienteRepository.save(nuevoCliente);

        return ResponseEntity.ok("Registro exitoso");
    }

}
