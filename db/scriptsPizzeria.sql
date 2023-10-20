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

EJEMPLOS PARA INGRESAR

PIZZAS
INSERT INTO pizzas (nombre, precio, descripcion, ingredientes, disponible) VALUES
('Pizza Margherita', 12.99, 'Tomate, mozzarella y albahaca', 'Tomate, mozzarella, albahaca', 1),
('Pizza Pepperoni', 14.99, 'Deliciosa con pepperoni', 'Tomate, mozzarella, pepperoni', 1),
('Pizza Vegetariana', 13.49, 'Llena de verduras frescas', 'Tomate, mozzarella, pimientos, champiñones, cebolla', 1),
('Pizza Hawaiana', 15.99, 'Con piña y jamón', 'Tomate, mozzarella, piña, jamón', 1),
('Pizza BBQ Pollo', 16.49, 'Pollo a la parrilla con salsa barbacoa', 'Tomate, mozzarella, pollo, cebolla roja, salsa barbacoa', 1),
('Pizza Marinara', 11.99, 'Sencilla y deliciosa', 'Tomate, ajo, orégano', 1),
('Pizza Cuatro Quesos', 14.49, 'Cuatro quesos diferentes', 'Tomate, mozzarella, queso cheddar, queso parmesano, queso de cabra', 1),
('Pizza Carnívora', 17.99, 'Cargada de carnes', 'Tomate, mozzarella, pepperoni, jamón, salchicha, carne molida', 1),
('Pizza de Pollo Alfredo', 16.99, 'Con salsa Alfredo de pollo', 'Mozzarella, pollo a la parrilla, salsa Alfredo, espinacas', 1),
('Pizza de Champiñones', 13.99, 'Para los amantes de los hongos', 'Tomate, mozzarella, champiñones, cebolla, ajo', 1);

CLIENTES
INSERT INTO clientes (nombre, direccion, telefono, correo) VALUES
    ('Ana Rodríguez', 'Calle 123, Ciudad A', '555-123-4567', 'ana@email.com'),
    ('Carlos Pérez', 'Avenida XYZ, Ciudad B', '555-987-6543', 'carlos@email.com'),
    ('Laura Gómez', 'Calle Principal, Ciudad C', '555-456-7890', 'laura@email.com'),
    ('Javier López', 'Calle 456, Ciudad D', '555-333-4444', 'javier@email.com'),
    ('María Sánchez', 'Avenida Central, Ciudad E', '555-777-8888', 'maria@email.com'),
    ('Juan Torres', 'Calle 789, Ciudad F', '555-111-2222', 'juan@email.com'),
    ('Elena Martínez', 'Avenida Norte, Ciudad G', '555-222-3333', 'elena@email.com'),
    ('Diego Ruiz', 'Calle 101, Ciudad H', '555-444-5555', 'diego@email.com'),
    ('Sofía Ramírez', 'Calle 555, Ciudad I', '555-666-7777', 'sofia@email.com'),
    ('Pedro González', 'Avenida Sur, Ciudad J', '555-888-9999', 'pedro@email.com');

EMPLEADOS
INSERT INTO empleados (nombre, apellido, fecha_nacimiento, direccion, telefono, puesto, salario, fecha_contratacion) VALUES
    ('Juan', 'Pérez', '1990-05-15', 'Calle 123, Ciudad', '555-123-4567', 'Gerente', 60000, '2023-01-15'),
    ('Ana', 'Gómez', '1985-07-20', 'Avenida XYZ, Ciudad', '555-987-6543', 'Analista de Datos', 50000, '2023-02-10'),
    ('Pedro', 'López', '1993-11-30', 'Calle 456, Ciudad', '555-456-7890', 'Desarrollador Web', 55000, '2023-03-05'),
    ('María', 'Hernández', '1988-04-10', 'Calle ABC, Ciudad', '555-789-0123', 'Contador', 58000, '2023-04-20'),
    ('Carlos', 'Ramírez', '1995-09-05', 'Avenida 789, Ciudad', '555-234-5678', 'Diseñador Gráfico', 52000, '2023-05-15'),
    ('Sofía', 'García', '1991-01-25', 'Calle 678, Ciudad', '555-567-8901', 'Asistente Administrativo', 48000, '2023-06-10'),
    ('Javier', 'Martínez', '1986-03-12', 'Avenida LMN, Ciudad', '555-678-9012', 'Ingeniero de Software', 60000, '2023-07-25'),
    ('Laura', 'Torres', '1994-08-17', 'Calle XYZ, Ciudad', '555-345-6789', 'Recursos Humanos', 54000, '2023-08-30'),
    ('Ricardo', 'Fernández', '1987-12-03', 'Avenida 123, Ciudad', '555-456-7890', 'Analista de Marketing', 52000, '2023-09-15'),
    ('Elena', 'Sánchez', '1992-06-22', 'Calle ABC, Ciudad', '555-567-8901', 'Asistente de Ventas', 48000, '2023-10-10');

PEDIDOS
PEDIDOS
INSERT INTO pedidos (cliente_id, empleado_id, pizza_id, cantidad, fecha_pedido, estado_pedido) VALUES
    (1, 3, 5, 2, '2023-01-15', 'En proceso'),
    (2, 4, 3, 1, '2023-02-10', 'En proceso'),
    (3, 1, 1, 3, '2023-03-05', 'Entregado'),
    (4, 2, 4, 1, '2023-04-20', 'En proceso'),
    (5, 5, 2, 2, '2023-05-15', 'En proceso'),
    (1, 4, 1, 2, '2023-06-10', 'Entregado'),
    (2, 3, 3, 1, '2023-07-25', 'Entregado'),
    (3, 2, 4, 3, '2023-08-30', 'En proceso'),
    (4, 1, 2, 1, '2023-09-15', 'Cancelado'),
    (5, 5, 1, 2, '2023-10-10', 'En proceso');

