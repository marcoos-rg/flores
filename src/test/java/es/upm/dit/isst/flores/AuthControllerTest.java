package es.upm.dit.isst.flores;

import com.fasterxml.jackson.databind.ObjectMapper;
import es.upm.dit.isst.flores.controller.AuthController;
import es.upm.dit.isst.flores.dto.LoginRequest;
import es.upm.dit.isst.flores.dto.RegisterRequest;
import es.upm.dit.isst.flores.model.Cliente;
import es.upm.dit.isst.flores.model.Floricultor;
import es.upm.dit.isst.flores.repository.ClienteRepository;
import es.upm.dit.isst.flores.repository.FloricultorRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Optional;

import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(AuthController.class)
@AutoConfigureMockMvc(addFilters = false)
class AuthControllerTest {

    @Autowired private MockMvc mockMvc;
    @Autowired private ObjectMapper objectMapper;

    @MockBean private ClienteRepository clienteRepository;
    @MockBean private FloricultorRepository floricultorRepository;
    @MockBean private PasswordEncoder passwordEncoder;

    @Test
    void loginClienteExitoso() throws Exception {
        Cliente c = new Cliente();
        c.setCliente_id(1L);
        c.setNombre("Pepe");
        c.setContrasena("hash");

        LoginRequest req = new LoginRequest();
        req.setEmail("cliente@test.com");
        req.setContrasena("123");

        Mockito.when(clienteRepository.findByEmail("cliente@test.com")).thenReturn(Optional.of(c));
        Mockito.when(passwordEncoder.matches("123", "hash")).thenReturn(true);

        mockMvc.perform(post("/auth/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(req)))
                .andExpect(status().isOk())
                .andExpect(content().string(containsString("cliente")))
                .andExpect(content().string(containsString("1")))
                .andExpect(content().string(containsString("Pepe")));
    }

    @Test
    void loginFloricultorExitoso() throws Exception {
        Floricultor f = new Floricultor();
        f.setFloricultor_id(2L);
        f.setNombre("Lola");
        f.setContrasena("hashpass");

        LoginRequest req = new LoginRequest();
        req.setEmail("floricultor@test.com");
        req.setContrasena("secreto");

        Mockito.when(clienteRepository.findByEmail("floricultor@test.com")).thenReturn(Optional.empty());
        Mockito.when(floricultorRepository.findByEmail("floricultor@test.com")).thenReturn(Optional.of(f));
        Mockito.when(passwordEncoder.matches("secreto", "hashpass")).thenReturn(true);

        mockMvc.perform(post("/auth/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(req)))
                .andExpect(status().isOk())
                .andExpect(content().string(containsString("floricultor")))
                .andExpect(content().string(containsString("2")))
                .andExpect(content().string(containsString("Lola")));
    }

    @Test
    void loginCredencialesIncorrectas() throws Exception {
        LoginRequest req = new LoginRequest();
        req.setEmail("no@existe.com");
        req.setContrasena("x");

        Mockito.when(clienteRepository.findByEmail("no@existe.com")).thenReturn(Optional.empty());
        Mockito.when(floricultorRepository.findByEmail("no@existe.com")).thenReturn(Optional.empty());

        mockMvc.perform(post("/auth/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(req)))
                .andExpect(status().isUnauthorized())
                .andExpect(content().string("Credenciales incorrectas"));
    }

    @Test
    void registroExitoso() throws Exception {
        RegisterRequest r = new RegisterRequest();
        r.setEmail("nuevo@cliente.com");
        r.setContrasena("12345");
        r.setNombre("Nuevo");

        Mockito.when(clienteRepository.findByEmail("nuevo@cliente.com")).thenReturn(Optional.empty());
        Mockito.when(passwordEncoder.encode("12345")).thenReturn("enc");

        mockMvc.perform(post("/auth/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(r)))
                .andExpect(status().isOk())
                .andExpect(content().string("Registro exitoso"));
    }

    @Test
    void registroEmailDuplicado() throws Exception {
        Mockito.when(clienteRepository.findByEmail("ya@existe.com"))
               .thenReturn(Optional.of(new Cliente()));

        RegisterRequest r = new RegisterRequest();
        r.setEmail("ya@existe.com");

        mockMvc.perform(post("/auth/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(r)))
                .andExpect(status().isBadRequest())
                .andExpect(content().string("El email ya está registrado"));
    }
}
