-- Crear floricultores
INSERT INTO floricultor (floricultor_id, nota, email, contrasena, nombre, imagen, codigo_postal, direccion)
VALUES
  (1, '4.5', 'sol@flores.com', 'pass123', 'Floristería Sol', 'sol.jpg', 28001, 'Calle Mayor 10, Madrid'),
  (2, '4.8', 'verdevida@flores.com', 'verde2024', 'Verde Vida', 'verdevida.jpg', 29015, 'Calle Princesa 25, Madrid'),
  (3, '4.3', 'naturalia@flores.com', 'natura!', 'Naturalia', 'naturalia.jpg', 30005, 'Av. Reina Sofía 8, Madrid'),
  (4, '4.9', 'aroma@flores.com', 'aroma2024', 'Aroma Floral', 'aroma.jpg', 31020, 'Calle Flor 3, Madrid'),
  (5, '4.6', 'petalos@flores.com', 'pet@123', 'Pétalos y Más', 'petalos.jpg', 32012, 'Plaza Castilla 1, Madrid');


-- Insertar productos
INSERT INTO producto (
  producto_id, floricultor_id, nombre, descripcion, imagen,
  precio, ocasion, tipo_flor, destacado
) VALUES
(1, 1, 'Ramo de Rosas', 'Un hermoso ramo de rosas rojas, perfecto para regalar.', 'https://images.myglobalflowers.com/20b84c76-ede1-4798-1ec2-702b57cba200/large', 25.00, 'San Valentín', 'Rosas', true),
(2, 2, 'Tulipanes Amarillos', 'Un ramo vibrante de tulipanes amarillos.', 'https://images.myglobalflowers.com/a8ccda32-4980-4f28-1dfa-d5382b83d900/large', 18.00, 'Cumpleaños', 'Tulipanes', false),
(3, 3, 'Ramo de Peonías', 'Ramo de peonías frescas en tonos pastel.', 'https://images.myglobalflowers.com/09e0bc44-e9db-4e6b-6a36-c5383a89ee00/medium', 42.50, 'Bodas', 'Peonías', true),
(4, 4, 'Bouquet Colorido', 'Un bouquet vibrante con una mezcla de flores.', 'https://images.myglobalflowers.com/90d55824-d803-4616-234e-bb63973fdf00/medium', 29.99, 'Cumpleaños', 'Mix de Flores', true),
(5, 5, 'Rosas Rosadas', 'Ramo de rosas rosadas con un toque romántico.', 'https://images.myglobalflowers.com/e8a8c2ef-e293-47df-78f5-f8aa4b52a300/medium', 34.75, 'Aniversario', 'Rosas', false),
(6, 1, 'Tulipanes Rojos', 'Hermoso ramo de tulipanes rojos, símbolo de amor.', 'https://images.myglobalflowers.com/b6e9f51e-a469-4a5f-ae8e-302adb00d600/medium', 22.99, 'San Valentín', 'Tulipanes', true),
(7, 2, 'Girasoles de Verano', 'Un ramo de girasoles brillantes.', 'https://images.myglobalflowers.com/d84915e6-942d-4e69-616d-e2a468c66300/medium', 27.50, 'Amistad', 'Girasoles', false),
(8, 3, 'Lirios Púrpuras', 'Lirios de un hermoso tono púrpura.', 'https://images.myglobalflowers.com/a5b25eb9-1764-47a7-24ed-6a3fc1fd2b00/medium', 31.99, 'Elegancia', 'Lirios', true);
