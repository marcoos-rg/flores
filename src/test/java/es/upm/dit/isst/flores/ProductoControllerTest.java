package es.upm.dit.isst.flores;

import com.fasterxml.jackson.databind.ObjectMapper;
import es.upm.dit.isst.flores.controller.ProductoController;
import es.upm.dit.isst.flores.dto.ProductoRequest;
import es.upm.dit.isst.flores.model.Floricultor;
import es.upm.dit.isst.flores.model.Producto;
import es.upm.dit.isst.flores.repository.FloricultorRepository;
import es.upm.dit.isst.flores.repository.ProductoRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;
import java.util.Optional;

import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(ProductoController.class)
@AutoConfigureMockMvc(addFilters = false)
class ProductoControllerTest {

    @Autowired private MockMvc mockMvc;
    @Autowired private ObjectMapper objectMapper;

    @MockBean private ProductoRepository productoRepository;
    @MockBean private FloricultorRepository floricultorRepository;

    @Test
    void getAllProductos() throws Exception {
        Producto prod = new Producto();
        prod.setProducto_id(1L);
        prod.setNombre("Rosa");

        Mockito.when(productoRepository.findAll()).thenReturn(List.of(prod));

        mockMvc.perform(get("/api/productos"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].producto_id").value(1))
                .andExpect(jsonPath("$[0].nombre").value("Rosa"));
    }

    @Test
    void crearProductoExitoso() throws Exception {
        Floricultor flor = new Floricultor();
        flor.setFloricultor_id(5L);

        ProductoRequest req = new ProductoRequest();
        req.setNombre("Tulipán");
        req.setDescripcion("Flor bonita");
        req.setImagen("url.jpg");
        req.setPrecio(9.99);
        req.setOcasion("Amor");
        req.setTipoFlor("Tulipán");
        req.setDestacado(true);
        req.setFloricultorId(5L);

        Mockito.when(floricultorRepository.findById(5L)).thenReturn(Optional.of(flor));

        mockMvc.perform(post("/api/productos")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(req)))
                .andExpect(status().isOk())
                .andExpect(content().string(containsString("Producto creado con ID")));
    }

    @Test
    void eliminarProductoExistente() throws Exception {
        Mockito.when(productoRepository.existsById(3L)).thenReturn(true);

        mockMvc.perform(delete("/api/productos/3"))
                .andExpect(status().isOk())
                .andExpect(content().string("Producto eliminado con éxito"));
    }

    @Test
    void eliminarProductoNoExistente() throws Exception {
        Mockito.when(productoRepository.existsById(99L)).thenReturn(false);

        mockMvc.perform(delete("/api/productos/99"))
                .andExpect(status().isOk())
                .andExpect(content().string("Producto no encontrado"));
    }
}
