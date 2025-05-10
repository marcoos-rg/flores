package es.upm.dit.isst.flores.controller;

import es.upm.dit.isst.flores.model.*;
import es.upm.dit.isst.flores.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import es.upm.dit.isst.flores.dto.ValoracionRequest;
import es.upm.dit.isst.flores.dto.ValoracionResponse;

import java.util.List;

@RestController
@RequestMapping("/api/valoraciones")
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
        // Obtener cliente
        Cliente cliente = clienteRepository.findById(request.getClienteId())
            .orElseThrow(() -> new RuntimeException("Cliente no encontrado"));

        // Obtener floricultor
        Floricultor floricultor = floricultorRepository.findById(request.getFloricultorId())
            .orElseThrow(() -> new RuntimeException("Floricultor no encontrado"));

        // Obtener pedido
        Pedido pedido = pedidoRepository.findById(request.getPedidoId())
            .orElseThrow(() -> new RuntimeException("Pedido no encontrado"));

        // Verificar que el pedido pertenece al cliente
        if (!pedido.getCliente().getCliente_id().equals(request.getClienteId())) {
            return ResponseEntity.status(403).body("No puedes valorar un pedido que no es tuyo.");
        }

        // Verificar que el pedido está en estado ENVIADO
        if (!"ENVIADO".equals(pedido.getEstado())) {
            return ResponseEntity.badRequest().body("Este pedido no está disponible para valorar.");
        }

    // Crear y guardar la valoración
    Valoracion valoracion = new Valoracion();
    valoracion.setCliente(cliente);
    valoracion.setFloricultor(floricultor);
    valoracion.setNota(request.getNota());
    valoracionRepository.save(valoracion);

    // Cambiar el estado del pedido a VALORADO
    pedido.setEstado("VALORADO");
    pedidoRepository.save(pedido);

    return ResponseEntity.ok("Valoración creada y pedido actualizado.");
}


    @GetMapping("/floricultor/{id}")
    public ResponseEntity<List<ValoracionResponse>> obtenerValoracionesPorFloricultor(@PathVariable Long id) {
        List<Valoracion> valoraciones = valoracionRepository.findByFloricultorId(id);
    
        List<ValoracionResponse> respuesta = valoraciones.stream()
            .map(v -> new ValoracionResponse(
                v.getValoracionId(),
                v.getNota(),
                v.getCliente().getNombre()
            ))
            .toList();
    
        return ResponseEntity.ok(respuesta);
    }
    
}
