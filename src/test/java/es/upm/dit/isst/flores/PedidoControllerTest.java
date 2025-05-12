package es.upm.dit.isst.flores;

import com.fasterxml.jackson.databind.ObjectMapper;
import es.upm.dit.isst.flores.controller.PedidoController;
import es.upm.dit.isst.flores.dto.PedidoRequest;
import es.upm.dit.isst.flores.model.*;
import es.upm.dit.isst.flores.repository.*;
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

@WebMvcTest(PedidoController.class)
@AutoConfigureMockMvc(addFilters = false)
class PedidoControllerTest {

    @Autowired private MockMvc mockMvc;
    @Autowired private ObjectMapper objectMapper;

    @MockBean private PedidoRepository pedidoRepository;
    @MockBean private DetallePedidoRepository detallePedidoRepository;
    @MockBean private ProductoRepository productoRepository;
    @MockBean private ClienteRepository clienteRepository;

    @Test
    void crearPedidoExitoso() throws Exception {
        Cliente cli = new Cliente();
        cli.setCliente_id(1L);

        Producto prod = new Producto();
        prod.setProducto_id(10L);
        prod.setPrecio(5.0);

        PedidoRequest.ProductoCantidad pc = new PedidoRequest.ProductoCantidad();
        pc.setProductoId(10L);
        pc.setCantidad(2);

        PedidoRequest req = new PedidoRequest();
        req.setClienteId(1L);
        req.setDireccionEntrega("Calle 123");
        req.setUrgencia(false);
        req.setProductos(List.of(pc));

        Mockito.when(clienteRepository.findById(1L)).thenReturn(Optional.of(cli));
        Mockito.when(productoRepository.findById(10L)).thenReturn(Optional.of(prod));

        mockMvc.perform(post("/api/pedidos/nuevo")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(req)))
                .andExpect(status().isOk())
                .andExpect(content().string(containsString("Pedido registrado")));
    }

    @Test
    void obtenerPedidosPorCliente() throws Exception {
        Pedido p = new Pedido();
        p.setPedido_id(1L);

        Mockito.when(pedidoRepository.findByClienteId(1L)).thenReturn(List.of(p));

        mockMvc.perform(get("/api/pedidos/cliente/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].pedido_id").value(1));
    }
}
