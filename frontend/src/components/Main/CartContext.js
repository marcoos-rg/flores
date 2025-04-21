
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const añadirAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find(p => p.producto_id === producto.producto_id);
      if (existe) {
        return prev.map(p =>
          p.producto_id === producto.producto_id
            ? { ...p, cantidad: p.cantidad + 1 }
            : p
        );
      } else {
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
  };

  const quitarDelCarrito = (producto_id) => {
    setCarrito(prev =>
      prev
        .map(p =>
          p.producto_id === producto_id
            ? { ...p, cantidad: p.cantidad - 1 }
            : p
        )
        .filter(p => p.cantidad > 0)
    );
  };

  const vaciarCarrito = () => setCarrito([]);

  return (
    <CartContext.Provider value={{ carrito, añadirAlCarrito, quitarDelCarrito, vaciarCarrito }}>
      {children}
    </CartContext.Provider>
  );
};
