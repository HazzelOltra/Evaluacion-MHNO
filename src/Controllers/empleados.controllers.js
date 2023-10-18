import { pool } from "../db.js";

export const Conexion = async (req, res) => {
  const [resultado] = await pool.query("");
  console.log(resultado);
  res.json(resultado[0]);
};

// Mostrar todos los empleados
export const traerEmpleados = async (req, res) => {
  const { nombre, apellido, fecha_nacimiento, direccion, telefono, puesto, salario, fecha_contratación} = req.body;
  const [data] = await pool.query("SELECT * FROM  empleados", [nombre, apellido, fecha_nacimiento, direccion, telefono, puesto, salario, fecha_contratación]);
  res.json(data);
};

// Mostrar un empleado
export const traerEmpleado = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM  empleados where empleado_id=?", [
    req.params.id,
  ]);
  res.json(rows);
};

// Añadir 
export const agregarEmpleado = async (req, res) => {
  const {nombre, apellido, fecha_nacimiento, direccion, telefono, puesto, salario, fecha_contratación} = req.body;
  const [data] = await pool.query(
    "INSERT INTO empleados (nombre, apellido, fecha_nacimiento, direccion, telefono, puesto, salario, fecha_contratación) VALUES (?,?,?,?,?,?,?,?)",
    [nombre, apellido, fecha_nacimiento, direccion, telefono, puesto, salario, fecha_contratación]
  );
  console.log(data);
  res.send({
    id: data.insertId,
    nombre, apellido, fecha_nacimiento, direccion, telefono, puesto, salario, fecha_contratación});
};

// Actualizar 
export const actualizarEmpleado = async (req, res) => {
  const { id } = req.params;
  const {nombre, apellido, fecha_nacimiento, direccion, telefono, puesto, salario, fecha_contratación} = req.body;
  const [result] = await pool.query(
    "UPDATE empleados SET nombre = IFNULL(?,nombre), apellido = IFNULL(?,apellido), fecha_nacimiento = IFNULL(?,fecha_nacimiento), direccion = IFNULL(?,direccion), telefono = IFNULL(?,telefono), puesto = IFNULL (?,puesto), salario = IFNULL (?,salario), fecha_contratacion = IFNULL (?,fecha_contratacion)  where empleado_id = ?",
    [nombre, apellido, fecha_nacimiento, direccion, telefono, puesto, salario, fecha_contratación, id]
  );
  // ifnull valida los datos en caso de no existir valores, solo actualiza los que si existan

  if (result.affectedRows === 0)
    return res.status(404).json({
      message: "El empleado no existe!",
    });
  const [rows] = await pool.query("SELECT * FROM empleados WHERE empleado_id =?", [
    id,
  ]);
  res.json(rows[0]);
};

//Eliminar 
export const eliminarEmpleado = async (req, res) => {
  const [data] = await pool.query("DELETE FROM empleados WHERE empleado_id=?", [
    req.params.id,
  ]);
  if (data.affectedRows <= 0)
    return res.status(404).json({
      message: "Empleado no encontrado",
    });
  res.sendStatus(204);
};
