CREATE TABLE floricultor (
    floricultor_id BIGINT PRIMARY KEY,
    nombre VARCHAR(255)
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
