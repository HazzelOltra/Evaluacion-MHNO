use pizzeria;

CREATE TABLE pizzas (
    pizza_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    descripcion TEXT,
    ingredientes TEXT,
    disponible BOOLEAN NOT NULL
);


CREATE TABLE clientes (
    cliente_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    telefono VARCHAR(20),
    correo VARCHAR(255) UNIQUE
);


CREATE TABLE pedidos (
    pedido_id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    empleado_id INT NOT NULL,
    pizza_id INT NOT NULL,
    cantidad INT NOT NULL,
    fecha_pedido DATE NOT NULL,
    estado_pedido ENUM('En proceso', 'Entregado', 'Cancelado') NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id),
    FOREIGN KEY (pizza_id) REFERENCES pizzas(pizza_id),
    FOREIGN KEY (empleado_id) REFERENCES empleados (empleado_id)
);

CREATE TABLE empleados (
    empleado_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    fecha_nacimiento DATE,
    direccion VARCHAR(255),
    telefono VARCHAR(20),
    puesto VARCHAR(50) NOT NULL,
    salario DECIMAL(10, 2) NOT NULL,
    fecha_contratacion DATE NOT NULL
);