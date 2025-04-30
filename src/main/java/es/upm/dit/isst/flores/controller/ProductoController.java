package es.upm.dit.isst.flores.controller;

import es.upm.dit.isst.flores.dto.ProductoRequest;
import es.upm.dit.isst.flores.model.Floricultor;
import es.upm.dit.isst.flores.model.Producto;
import es.upm.dit.isst.flores.repository.FloricultorRepository;
import es.upm.dit.isst.flores.repository.ProductoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "*")
public class ProductoController {

    private final ProductoRepository productoRepository;
    private final FloricultorRepository floricultorRepository;

    @Autowired
    public ProductoController(ProductoRepository productoRepository, FloricultorRepository floricultorRepository) {
        this.productoRepository = productoRepository;
        this.floricultorRepository = floricultorRepository;
    }

    // GET: Obtener todos los productos (general)
    @GetMapping
    public List<Producto> getAllProductos() {
        return productoRepository.findAll();
    }

    // GET: Obtener todos los productos de un floricultor concreto
    @GetMapping("/floricultor/{id}")
    public List<Producto> getProductosByFloricultor(@PathVariable Long id) {
        return productoRepository.findByFloricultorId(id);
    }

    // POST: Crear nuevo producto
    @PostMapping
    public String crearProducto(@RequestBody ProductoRequest request) {
        Optional<Floricultor> floricultorOpt = floricultorRepository.findById(request.getFloricultorId());
        if (floricultorOpt.isEmpty()) {
            return "Floricultor no encontrado";
        }

        Producto producto = new Producto();
        producto.setFloricultor(floricultorOpt.get());
        producto.setNombre(request.getNombre());
        producto.setDescripcion(request.getDescripcion());
        producto.setImagen(request.getImagen());
        producto.setPrecio(request.getPrecio());
        producto.setOcasion(request.getOcasion());
        producto.setTipo_flor(request.getTipoFlor());
        producto.setDestacado(request.isDestacado());

        productoRepository.save(producto);

        return "Producto creado con ID: " + producto.getProducto_id();
    }

    // DELETE: Eliminar producto
    @DeleteMapping("/{id}")
    public String eliminarProducto(@PathVariable Long id) {
        if (productoRepository.existsById(id)) {
            productoRepository.deleteById(id);
            return "Producto eliminado con éxito";
        } else {
            return "Producto no encontrado";
        }
    }
}
