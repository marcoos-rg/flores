CREATE TABLE floricultor (
    floricultor_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nota VARCHAR(255),
    email VARCHAR(255),
    contrasena VARCHAR(255),
    nombre VARCHAR(255),
    imagen VARCHAR(255),
    direccion VARCHAR(255),
    codigo_postal BIGINT  
);

CREATE TABLE producto (
    producto_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    floricultor_id BIGINT,
    nombre VARCHAR(255),
    descripcion VARCHAR(255),
    imagen VARCHAR(255),
    precio DOUBLE,
    ocasion VARCHAR(255),
    tipo_flor VARCHAR(255),
    destacado BOOLEAN,
    CONSTRAINT fk_floricultor FOREIGN KEY (floricultor_id) REFERENCES floricultor(floricultor_id)
);

CREATE TABLE cliente (
    cliente_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255),
    contrasena VARCHAR(255),
    nombre VARCHAR(255),
    imagen VARCHAR(255)
);


CREATE TABLE valoracion (
    valoracion_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nota BIGINT,
    cliente_id BIGINT,
    floricultor_id BIGINT,
    CONSTRAINT fk_cliente_id FOREIGN KEY (cliente_id) REFERENCES cliente(cliente_id),
    CONSTRAINT fk_floricultor_id FOREIGN KEY (floricultor_id) REFERENCES floricultor(floricultor_id)
);