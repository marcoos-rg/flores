-- Crear floricultores
INSERT INTO floricultor (floricultor_id, nota, email, contrasena, nombre, imagen, codigo_postal, direccion)
VALUES
  (1, '4.5', 'sol@flores.com', 'pass123', 'Floristería Sol', 'sol.jpg', 28001, 'Calle Mayor 10, Madrid'),
  (2, '4.8', 'verdevida@flores.com', 'verde2024', 'Verde Vida', 'verdevida.jpg', 28015, 'Calle Princesa 25, Madrid'),
  (3, '4.3', 'naturalia@flores.com', 'natura!', 'Naturalia', 'naturalia.jpg', 28005, 'Av. Reina Sofía 8, Madrid'),
  (4, '4.9', 'aroma@flores.com', 'aroma2024', 'Aroma Floral', 'aroma.jpg', 28020, 'Calle Flor 3, Madrid'),
  (5, '4.6', 'petalos@flores.com', 'pet@123', 'Pétalos y Más', 'petalos.jpg', 28012, 'Plaza Castilla 1, Madrid');


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
(9, 4, 'Tulipanes Amarillos', 'Brillantes tulipanes amarillos que iluminan cualquier habitación.', 'https://images.myglobalflowers.com/def456/medium', 73.99, 'Vibrante', 'Tulipanes', false),
(10, 5, 'Orquídeas Blancas', 'Elegantes orquídeas blancas que simbolizan pureza y sofisticación.', 'https://images.myglobalflowers.com/ghi789/medium', 99.99, 'Sofisticado', 'Orquídeas', true),
(11, 1, 'Ramo de Margaritas', 'Frescas margaritas blancas con un toque de amarillo en el centro.', 'https://images.myglobalflowers.com/jkl012/medium', 48.99, 'Alegre', 'Margaritas', false),
(12, 2, 'Girasoles Brillantes', 'Majestuosos girasoles que transmiten energía y felicidad.', 'https://images.myglobalflowers.com/mno345/medium', 89.99, 'Radiante', 'Girasoles', true),
(13, 3, 'Claveles Rosados', 'Delicados claveles rosados que simbolizan gratitud y admiración.', 'https://images.myglobalflowers.com/pqr678/medium', 67.99, 'Encantador', 'Claveles', false),
(14, 4, 'Ramo de Lirios Blancos', 'Exquisitos lirios blancos que evocan pureza y serenidad.', 'https://images.myglobalflowers.com/stu901/medium', 75.99, 'Elegante', 'Lirios', true),
(15, 5, 'Peonías Rosadas', 'Fabulosas peonías rosadas de fragancia embriagadora.', 'https://images.myglobalflowers.com/vwx234/medium', 102.99, 'Encantador', 'Peonías', false),
(16, 1, 'Rosas Anaranjadas', 'Vibrantes rosas anaranjadas que simbolizan entusiasmo y pasión.', 'https://images.myglobalflowers.com/yz567/medium', 59.99, 'Apasionado', 'Rosas', true),
(17, 2, 'Ramo de Violetas', 'Dulces violetas de color púrpura intenso.', 'https://images.myglobalflowers.com/abc678/medium', 45.99, 'Dulce', 'Violetas', false),
(18, 3, 'Tulipanes Rojos', 'Elegantes tulipanes rojos que expresan amor y calidez.', 'https://images.myglobalflowers.com/def789/medium', 77.99, 'Apasionado', 'Tulipanes', true),
(19, 4, 'Orquídeas Moradas', 'Impresionantes orquídeas moradas con un aire exótico.', 'https://images.myglobalflowers.com/ghi890/medium', 92.99, 'Exótico', 'Orquídeas', false),
(20, 5, 'Ramo de Dalias', 'Coloridas dalias de pétalos exuberantes.', 'https://images.myglobalflowers.com/jkl123/medium', 98.99, 'Vistoso', 'Dalias', true),
(21, 1, 'Girasoles Dorados', 'Brillantes girasoles que evocan la calidez del sol.', 'https://images.myglobalflowers.com/mno234/medium', 85.99, 'Radiante', 'Girasoles', false),
(22, 2, 'Claveles Blancos', 'Suaves claveles blancos con un aroma delicado.', 'https://images.myglobalflowers.com/pqr567/medium', 64.99, 'Sutil', 'Claveles', true),
(23, 3, 'Peonías Blancas', 'Maravillosas peonías blancas de gran tamaño.', 'https://images.myglobalflowers.com/stu890/medium', 110.99, 'Impresionante', 'Peonías', false),
(24, 4, 'Rosas Fucsia', 'Intensas rosas fucsia que resaltan en cualquier ambiente.', 'https://images.myglobalflowers.com/vwx123/medium', 70.99, 'Vibrante', 'Rosas', true),
(25, 5, 'Ramo de Hortensias', 'Esponjosas hortensias en tonos pastel.', 'https://images.myglobalflowers.com/yz456/medium', 95.99, 'Encantador', 'Hortensias', false),
(26, 1, 'Tulipanes Lila', 'Tulipanes lila con un toque de suavidad.', 'https://images.myglobalflowers.com/abc567/medium', 82.99, 'Sutil', 'Tulipanes', true),
(27, 2, 'Orquídeas Azuladas', 'Raras orquídeas azuladas de una belleza única.', 'https://images.myglobalflowers.com/def890/medium', 115.99, 'Exclusivo', 'Orquídeas', false),
(28, 3, 'Ramo de Narcisos', 'Hermosos narcisos amarillos que simbolizan renacimiento.', 'https://images.myglobalflowers.com/ghi123/medium', 50.99, 'Brillante', 'Narcisos', true),
(29, 4, 'Girasoles Gigantes', 'Girasoles de gran tamaño que alegran cualquier día.', 'https://images.myglobalflowers.com/jkl234/medium', 88.99, 'Energético', 'Girasoles', false),
(30, 5, 'Claveles Rojos', 'Profundos claveles rojos llenos de pasión.', 'https://images.myglobalflowers.com/mno567/medium', 76.99, 'Apasionado', 'Claveles', true),
(31, 1, 'Rosas Blancas', 'Puras y elegantes rosas blancas.', 'https://images.myglobalflowers.com/pqr890/medium', 49.99, 'Sofisticado', 'Rosas', false),
(32, 2, 'Peonías Amarillas', 'Peonías de un cálido tono amarillo.', 'https://images.myglobalflowers.com/stu123/medium', 109.99, 'Brillante', 'Peonías', true),
(33, 3, 'Ramo de Azaleas', 'Vistosas azaleas de colores vivos.', 'https://images.myglobalflowers.com/vwx456/medium', 66.99, 'Radiante', 'Azaleas', false),
(34, 4, 'Hortensias Azules', 'Mágicas hortensias de un azul profundo.', 'https://images.myglobalflowers.com/yz789/medium', 91.99, 'Misterioso', 'Hortensias', true),
(35, 3, 'Ramo de Rosas Rojas', 'Un hermoso ramo de rosas rojas con pétalos aterciopelados.', 'https://images.myglobalflowers.com/abc123/medium', 56.99, 'Romántico', 'Rosas', true);

