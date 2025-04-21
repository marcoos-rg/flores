package es.upm.dit.isst.flores.controller;

import es.upm.dit.isst.flores.dto.PedidoRequest;
import es.upm.dit.isst.flores.model.*;
import es.upm.dit.isst.flores.repository.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

        // Fecha de pedido: hoy. Fecha de entrega: null por defecto
        LocalDate hoy = LocalDate.now();
        pedido.setFecha_pedido(hoy);
        pedido.setFecha_entrega(null); // Se establecerá cuando se marque como RECIBIDO

        // Calcular precio total
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
}
