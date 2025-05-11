package es.upm.dit.isst.flores.controller;

import es.upm.dit.isst.flores.dto.PedidoRequest;
import es.upm.dit.isst.flores.model.*;
import es.upm.dit.isst.flores.repository.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.http.ResponseEntity;

import java.time.LocalDate;
import java.util.*;

@RestController
@RequestMapping("/api/pedidos")
@CrossOrigin(origins = "*")
public class PedidoController {

    @Autowired private PedidoRepository pedidoRepository;
    @Autowired private DetallePedidoRepository detallePedidoRepository;
    @Autowired private ProductoRepository productoRepository;
    @Autowired private ClienteRepository clienteRepository;

    @PostMapping("/nuevo")
    public String crearPedido(@RequestBody PedidoRequest request) {

        Optional<Cliente> clienteOpt = clienteRepository.findById(request.getClienteId());
        if (clienteOpt.isEmpty()) {
            return "Cliente no encontrado";
        }

        Cliente cliente = clienteOpt.get();

        Pedido pedido = new Pedido();
        pedido.setCliente(cliente);
        pedido.setDireccion_pedido(request.getDireccionEntrega());
        pedido.setUrgencia(request.isUrgencia());
        pedido.setEstado("REALIZADO");

        // Nuevos campos
        pedido.setCiudad(request.getCiudad());
        pedido.setCodigoPostal(request.getCodigoPostal());

        // Si es urgente y se ha proporcionado fecha de entrega, la guardamos
        if (request.isUrgencia() && request.getFechaEntrega() != null) {
            pedido.setFecha_entrega(request.getFechaEntrega());
        } else {
            pedido.setFecha_entrega(null);
        }

        pedido.setFecha_pedido(LocalDate.now());

        double precioTotal = 0.0;
        List<DetallePedido> detalles = new ArrayList<>();

        for (PedidoRequest.ProductoCantidad pc : request.getProductos()) {
            Optional<Producto> productoOpt = productoRepository.findById(pc.getProductoId());
            if (productoOpt.isPresent()) {
                Producto producto = productoOpt.get();
                DetallePedido detalle = new DetallePedido();
                detalle.setPedido(pedido);
                detalle.setProducto(producto);
                detalle.setCantidad(pc.getCantidad());
                detalles.add(detalle);

                precioTotal += producto.getPrecio() * pc.getCantidad();
            }
        }

        pedido.setPrecio(precioTotal);
        pedido.setDetalles(detalles);

        pedidoRepository.save(pedido);

        return "Pedido registrado con éxito. ID: " + pedido.getPedido_id();
    }

    @PutMapping("/{id}/enviar")
    public ResponseEntity<?> marcarPedidoComoEnviado(@PathVariable Long id) {
        Pedido pedido = pedidoRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Pedido no encontrado"));

        if (!"REALIZADO".equals(pedido.getEstado())) {
            return ResponseEntity.badRequest().body("Solo se pueden enviar pedidos con estado REALIZADO.");
        }

        pedido.setEstado("ENVIADO");
        pedidoRepository.save(pedido);

        return ResponseEntity.ok("Pedido marcado como ENVIADO.");
    }

    @GetMapping("/cliente/{id}")
    public List<Pedido> obtenerPedidosPorCliente(@PathVariable Long id) {
        return pedidoRepository.findByClienteId(id);
    }

    @GetMapping("/floricultor/{id}")
    public List<Pedido> obtenerPedidosPorFloricultor(@PathVariable Long id) {
        return pedidoRepository.findByFloricultorId(id);
    }
    
}
