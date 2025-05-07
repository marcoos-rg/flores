package es.upm.dit.isst.flores.controller;

import es.upm.dit.isst.flores.dto.ValoracionRequest;
import es.upm.dit.isst.flores.model.*;
import es.upm.dit.isst.flores.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/valoraciones")
public class ValoracionController {

    @Autowired
    private ValoracionRepository valoracionRepository;

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private FloricultorRepository floricultorRepository;

    @Autowired
    private PedidoRepository pedidoRepository;

    @PostMapping("/crear")
    public ResponseEntity<?> crearValoracion(@RequestBody ValoracionRequest request) {

        Cliente cliente = clienteRepository.findById(request.getClienteId())
            .orElseThrow(() -> new RuntimeException("Cliente no encontrado"));

        Pedido pedido = pedidoRepository.findById(request.getPedidoId())
            .orElseThrow(() -> new RuntimeException("Pedido no encontrado"));

        Floricultor floricultor = pedido.getDetalles()
            .get(0).getProducto().getFloricultor();

        Valoracion valoracion = new Valoracion();
        valoracion.setCliente(cliente);
        valoracion.setFloricultor(floricultor);
        valoracion.setPedido(pedido);
        valoracion.setPuntuacion(request.getPuntuacion());
        valoracion.setComentario(request.getComentario());
        valoracion.setFechaCreacion(LocalDateTime.now());


        valoracionRepository.save(valoracion);

        return ResponseEntity.ok(valoracion);
    }

    @GetMapping("/floricultor/{id}")
    public ResponseEntity<List<Valoracion>> obtenerValoracionesPorFloricultor(@PathVariable Long id) {
        List<Valoracion> valoraciones = valoracionRepository.findByFloricultorId(id);
        return ResponseEntity.ok(valoraciones);
    }
}
