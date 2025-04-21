package es.upm.dit.isst.flores.dto;

import java.util.List;

public class PedidoRequest {
    private String direccionEntrega;
    private boolean urgencia;
    private Long clienteId;
    private List<ProductoCantidad> productos;

    public String getDireccionEntrega() { return direccionEntrega; }
    public void setDireccionEntrega(String direccionEntrega) { this.direccionEntrega = direccionEntrega; }

    public boolean isUrgencia() { return urgencia; }
    public void setUrgencia(boolean urgencia) { this.urgencia = urgencia; }

    public Long getClienteId() { return clienteId; }
    public void setClienteId(Long clienteId) { this.clienteId = clienteId; }

    public List<ProductoCantidad> getProductos() { return productos; }
    public void setProductos(List<ProductoCantidad> productos) { this.productos = productos; }

    public static class ProductoCantidad {
        private Long productoId;
        private int cantidad;

        public Long getProductoId() { return productoId; }
        public void setProductoId(Long productoId) { this.productoId = productoId; }

        public int getCantidad() { return cantidad; }
        public void setCantidad(int cantidad) { this.cantidad = cantidad; }
    }
}
