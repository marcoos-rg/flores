package es.upm.dit.isst.flores.controller;

import es.upm.dit.isst.flores.model.Producto;
import es.upm.dit.isst.flores.repository.ProductoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
public class ProductoController {

    private final ProductoRepository productoRepository;

    public ProductoController(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    // GET /api/productos
    @GetMapping
    public List<Producto> getAllProductos() {
        return productoRepository.findAll();
    }
}
