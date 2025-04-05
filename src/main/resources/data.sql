-- Crear floricultores
INSERT INTO floricultor (floricultor_id, nota, email, contrasena, nombre, imagen, codigo_postal, direccion)
VALUES
  (1, '4.5', 'sol@flores.com', 'pass123', 'Floralia', 'https://img.freepik.com/foto-gratis/mujer-plano-medio-celebrando-dia-madre_23-2151207267.jpg', 28001, 'Calle Mayor 10, Madrid'),
  (2, '4.8', 'verdevida@flores.com', 'verde2024', 'Verde Vida', 'https://img.freepik.com/foto-gratis/florista-sonriente-admirando-ramo_23-2147760922.jpg?t=st=1743534203~exp=1743537803~hmac=406b3eb962877c194ba2e985c85443f5f94587dc1d35f18200e91b70f3f6349e&w=1380', 29015, 'Calle Princesa 25, Madrid'),
  (3, '4.3', 'naturalia@flores.com', 'natura!', 'Naturalia', 'https://img.freepik.com/fotos-premium/propietario-floristeria_53876-20191.jpg?ga=GA1.1.27058168.1725817494&semt=ais_hybrid', 30005, 'Av. Reina Sofía 8, Madrid'),
  (4, '4.9', 'aroma@flores.com', 'aroma2024', 'Aroma Floral', 'https://img.freepik.com/fotos-premium/mujer-mayor-arregla-flores-mercado-flores-local_52137-21736.jpg?ga=GA1.1.27058168.1725817494&semt=ais_hybrid', 31020, 'Calle Flor 3, Madrid'),
  (5, '4.6', 'petalos@flores.com', 'pet@123', 'Pétalos y Más', 'https://img.freepik.com/foto-gratis/concepto-jardineria-manos-femeninas_23-2148127942.jpg?ga=GA1.1.27058168.1725817494&semt=ais_hybrid', 32012, 'Plaza Castilla 1, Madrid');


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
(6, 1, 'Rosas Blancas', 'Hermoso ramo de tulipanes rojos, símbolo de amor.', 'https://images.myglobalflowers.com/b6e9f51e-a469-4a5f-ae8e-302adb00d600/medium', 22.99, 'San Valentín', 'Tulipanes', true),
(7, 2, 'Girasoles de Verano', 'Un ramo de girasoles brillantes.', 'https://images.myglobalflowers.com/d84915e6-942d-4e69-616d-e2a468c66300/medium', 27.50, 'Amistad', 'Girasoles', false),
(8, 3, 'Lirios Púrpuras', 'Lirios de un hermoso tono púrpura.', 'https://images.myglobalflowers.com/a5b25eb9-1764-47a7-24ed-6a3fc1fd2b00/medium', 31.99, 'Elegancia', 'Lirios', true),
(9, 4, 'Tulipanes Amarillos', 'Brillantes tulipanes amarillos que iluminan cualquier habitación.', 'https://images.myglobalflowers.com/30eb2ea3-6bd0-479b-f76f-25a5a03f4700/medium', 73.99, 'Vibrante', 'Tulipanes', false),
(10, 5, 'Orquídeas Blancas', 'Elegantes orquídeas blancas que simbolizan pureza y sofisticación.', 'https://images.myglobalflowers.com/537aef95-927a-4420-0b70-6efa160a4400/medium', 99.99, 'Sofisticado', 'Orquídeas', true),
(11, 1, 'Ramo Floral Morado', 'Frescas margaritas blancas con un toque de amarillo en el centro.', 'https://images.myglobalflowers.com/3a403742-fdac-41ed-b901-a73f94be4900/medium', 48.99, 'Alegre', 'Margaritas', false),
(12, 2, 'Girasoles Brillantes', 'Majestuosos girasoles que transmiten energía y felicidad.', 'https://images.myglobalflowers.com/26c7dbee-c81f-4a8f-68c3-11a344405700/medium', 89.99, 'Radiante', 'Girasoles', true),
(13, 3, 'Claveles Rosados', 'Delicados claveles rosados que simbolizan gratitud y admiración.', 'https://images.myglobalflowers.com/9e54e1ab-7b07-4e1c-298d-a010068d0400/medium', 67.99, 'Encantador', 'Claveles', false),
(14, 4, 'Ramo de Lirios Blancos', 'Exquisitos lirios blancos que evocan pureza y serenidad.', 'https://images.myglobalflowers.com/f019d7e8-01a9-4e1b-5761-ff78d629e000/medium', 75.99, 'Elegante', 'Lirios', true),
(15, 5, 'Peonías Rosadas', 'Fabulosas peonías rosadas de fragancia embriagadora.', 'https://images.myglobalflowers.com/77b9faec-360f-4545-db53-0e1fa0639800/medium', 102.99, 'Encantador', 'Peonías', false),
(16, 1, 'Rosas Anaranjadas', 'Vibrantes rosas anaranjadas que simbolizan entusiasmo y pasión.', 'https://images.myglobalflowers.com/21d4097c-9e83-438f-b9f6-f94da4bc1100/medium', 59.99, 'Apasionado', 'Rosas', true),
(17, 2, 'Ramo de Violetas', 'Dulces violetas de color púrpura intenso.', 'https://images.myglobalflowers.com/8454f4db-112f-4bdb-ca27-1d6ea680e600/medium', 45.99, 'Dulce', 'Violetas', false),
(18, 3, 'Rosas Blancas', 'Elegantes tulipanes rojos que expresan amor y calidez.', 'https://images.myglobalflowers.com/19e60dd3-c27d-40cd-9a18-33df6e4e8100/medium', 77.99, 'Apasionado', 'Tulipanes', true),
(19, 4, 'Orquídeas Moradas', 'Impresionantes orquídeas moradas con un aire exótico.', 'https://images.myglobalflowers.com/32099a22-7c3e-4730-e2f1-5ae152e23e00/medium', 92.99, 'Exótico', 'Orquídeas', false),
(20, 5, 'Ramo de Dalias', 'Coloridas dalias de pétalos exuberantes.', 'https://images.myglobalflowers.com/827ed7d4-7752-4d40-c4d3-96f18ec1d100/medium', 98.99, 'Vistoso', 'Dalias', true),
(21, 1, 'Girasoles Dorados', 'Brillantes girasoles que evocan la calidez del sol.', 'https://images.myglobalflowers.com/28592075-21a0-4f2d-7152-30a22a0a8000/medium', 85.99, 'Radiante', 'Girasoles', false),
(22, 2, 'Claveles Blancos', 'Suaves claveles blancos con un aroma delicado.', 'https://images.myglobalflowers.com/e4e30434-09b6-424b-cf0d-f59d40de8800/medium', 64.99, 'Sutil', 'Claveles', true),
(23, 3, 'Peonías Blancas', 'Maravillosas peonías blancas de gran tamaño.', 'https://images.myglobalflowers.com/3ed25c0f-4f9c-4b79-5399-33929915d900/medium', 110.99, 'Impresionante', 'Peonías', false),
(24, 4, 'Rosas Fucsia', 'Intensas rosas fucsia que resaltan en cualquier ambiente.', 'https://images.myglobalflowers.com/0555b759-d89c-4869-8f53-38041a893a00/medium', 70.99, 'Vibrante', 'Rosas', true),
(25, 5, 'Ramo de Hortensias', 'Esponjosas hortensias en tonos pastel.', 'https://images.myglobalflowers.com/4ccaed65-0b4c-4e87-7684-33ba1eb05400/medium', 95.99, 'Encantador', 'Hortensias', false),
(26, 1, 'Tulipanes Lila', 'Tulipanes lila con un toque de suavidad.', 'https://images.myglobalflowers.com/2eea302d-edcd-4b1e-f3fb-f267a6c1dc00/medium', 82.99, 'Sutil', 'Tulipanes', true),
(27, 2, 'Orquídeas Azuladas', 'Raras orquídeas azuladas de una belleza única.', 'https://images.myglobalflowers.com/b1d58797-39fc-497f-a34e-a3ca65061300/medium', 115.99, 'Exclusivo', 'Orquídeas', false),
(28, 3, 'Ramo de Narcisos', 'Hermosos narcisos amarillos que simbolizan renacimiento.', 'https://images.myglobalflowers.com/ab800f5e-cb3e-404f-22b9-63ea9ccab200/medium', 50.99, 'Brillante', 'Narcisos', true),
(29, 4, 'Girasoles Gigantes', 'Girasoles de gran tamaño que alegran cualquier día.', 'https://images.myglobalflowers.com/3a6216be-6140-4148-15b4-bb4b5e563600/medium', 88.99, 'Energético', 'Girasoles', false),
(30, 5, 'Claveles Rojos', 'Profundos claveles rojos llenos de pasión.', 'https://images.myglobalflowers.com/01055318-053a-4aec-3a4b-700d750ae300/medium', 76.99, 'Apasionado', 'Claveles', true),
(31, 1, 'Rosas Blancas', 'Puras y elegantes rosas blancas.', 'https://images.myglobalflowers.com/0e449a37-e231-4e98-4700-08efb32d7e00/medium', 49.99, 'Sofisticado', 'Rosas', false),
(32, 2, 'Peonías Amarillas', 'Peonías de un cálido tono amarillo.', 'https://images.myglobalflowers.com/77e1bc0d-f4da-4033-2334-f5c9ecfd6c00/medium', 109.99, 'Brillante', 'Peonías', true),
(33, 3, 'Ramo de Azaleas', 'Vistosas azaleas de colores vivos.', 'https://images.myglobalflowers.com/be7cdc71-2b24-4abf-e37c-409aa4d6e900/medium', 66.99, 'Radiante', 'Azaleas', false),
(34, 4, 'Hortensias Azules', 'Mágicas hortensias de un azul profundo.', 'https://images.myglobalflowers.com/410fb92f-fe09-4c62-ce3c-29344cd06700/medium', 91.99, 'Misterioso', 'Hortensias', true),
(35, 3, 'Ramo de Rosas Rojas', 'Un hermoso ramo de rosas rojas con pétalos aterciopelados.', 'https://images.myglobalflowers.com/dcfb6687-2665-4e63-956d-c998fb276400/medium', 56.99, 'Romántico', 'Rosas', true);

-- Crear tabla de clientes
-- Las contraseñas estan cifradas con bcrypt
-- Mail: ana@cliente.com --> Contrasena: ana123
-- Mail: luis@cliente.com --> Contrasena: luis123
-- Y así sucesivamente
INSERT INTO cliente (cliente_id, email, contrasena, nombre, imagen) VALUES
(1, 'ana@cliente.com', 'ana123', 'Ana Rosas', 'https://randomuser.me/api/portraits/women/1.jpg'),
(2, 'luis@cliente.com', 'luis123', 'Luis Pérez', 'https://randomuser.me/api/portraits/men/2.jpg'),
(3, 'carla@cliente.com', 'carla123', 'Carla Sánchez', 'https://randomuser.me/api/portraits/women/3.jpg'),
(4, 'david@cliente.com', 'david123', 'David Gómez', 'https://randomuser.me/api/portraits/men/4.jpg'),
(5, 'maria@cliente.com', 'maria123', 'María López', 'https://randomuser.me/api/portraits/women/5.jpg');

