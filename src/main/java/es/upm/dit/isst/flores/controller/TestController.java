package es.upm.dit.isst.flores.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class TestController {

    @GetMapping("/api/hello")
    public Map<String, String> sayHello() {
        return Map.of("mensaje", "¡Hola desde el backend de Spring!");
    }
}