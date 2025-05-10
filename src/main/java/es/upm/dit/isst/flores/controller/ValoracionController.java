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
@RequestMapping("/valoraciones")
public class ValoracionController {

    @Autowired
    private ValoracionRepository valoracionRepository;

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private FloricultorRepository floricultorRepository;

    @PostMapping("/crear")
    public ResponseEntity<?> crearValoracion(@RequestBody ValoracionRequest request) {

        Cliente cliente = clienteRepository.findById(request.getClienteId())
            .orElseThrow(() -> new RuntimeException("Cliente no encontrado"));

        Floricultor floricultor = floricultorRepository.findById(request.getFloricultorId())
            .orElseThrow(() -> new RuntimeException("Floricultor no encontrado"));

        Valoracion valoracion = new Valoracion();
        valoracion.setCliente(cliente);
        valoracion.setFloricultor(floricultor);
        valoracion.setNota(request.getNota());

        valoracionRepository.save(valoracion);

        return ResponseEntity.ok(valoracion);
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
