package es.upm.dit.isst.flores.security;

import es.upm.dit.isst.flores.model.Cliente;
import es.upm.dit.isst.flores.model.Floricultor;
import es.upm.dit.isst.flores.repository.ClienteRepository;
import es.upm.dit.isst.flores.repository.FloricultorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PasswordInitService implements CommandLineRunner {

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private FloricultorRepository floricultorRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        // --- Clientes ---
        List<Cliente> clientes = clienteRepository.findAll();
        for (Cliente cliente : clientes) {
            String contrasena = cliente.getContrasena();
            if (!contrasena.startsWith("$2a$")) {
                cliente.setContrasena(passwordEncoder.encode(contrasena));
            }
        }
        clienteRepository.saveAll(clientes);
        System.out.println("[INFO] Contraseñas de clientes cifradas");

        // --- Floricultores ---
        List<Floricultor> floricultores = floricultorRepository.findAll();
        for (Floricultor floricultor : floricultores) {
            String contrasena = floricultor.getContrasena();
            if (!contrasena.startsWith("$2a$")) {
                floricultor.setContrasena(passwordEncoder.encode(contrasena));
            }
        }
        floricultorRepository.saveAll(floricultores);
        System.out.println("[INFO] Contraseñas de floricultores cifradas");
    }
}
