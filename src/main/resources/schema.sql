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
    producto_id BIGINT PRIMARY KEY,
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
