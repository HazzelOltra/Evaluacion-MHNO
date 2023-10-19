import { pool } from "../db.js";

export const Conexion = async (req, res) => {
  const [resultado] = await pool.query("");
  console.log(resultado);
  res.json(resultado[0]);
};

// Mostrar todos los clientes
export const traerClientes = async (req, res) => {
  try{
  const { nombre, direccion, telefono,correo} = req.body;
  const [data] = await pool.query("SELECT * FROM  clientes", [
    nombre, direccion, telefono,correo
  ]);
  res.json(data);
} catch (error) {
  return res
    .status(500)
    .json({ message: "Algo anda mal... favor de verificar" });
}
  
};


// Mostrar un cliente
export const traerCliente = async (req, res) => {
  try{
  const [rows] = await pool.query("SELECT * FROM  clientes where cliente_id=?", [
    req.params.id,
  ]);
  res.json(rows);
} catch (error) {
  return res
    .status(500)
    .json({ message: "Algo anda mal... favor de verificar" });
}
};

// Añadir
export const agregarCliente = async (req, res) => {
  try{
  const { nombre, direccion, telefono,correo} = req.body;
  const [data] = await pool.query(
    "INSERT INTO clientes (nombre, direccion, telefono,correo) VALUES (?,?,?,?)",
    [nombre, direccion, telefono,correo]
  );
  console.log(data);
  res.send({
    id: data.insertId,
    nombre, 
    direccion, 
    telefono,
    correo
  });
} catch (error) {
  return res
    .status(500)
    .json({ message: "Algo anda mal... favor de verificar" });
}
};

// Actualizar
export const actualizarCliente = async (req, res) => {
  try{
  const { id } = req.params;
  const {nombre, direccion, telefono,correo} = req.body;
  const [result] = await pool.query(
    "UPDATE clientes SET nombre = IFNULL(?,nombre), direccion = IFNULL(?,direccion),  telefono = IFNULL(?,telefono),  correo = IFNULL(?,correo) WHERE cliente_id =?",
    [nombre, direccion, telefono,correo, id]
  );

  if (result.affectedRows === 0)
    return res.status(404).json({
      message: "El cliente no existe!",
    });
  const [rows] = await pool.query("SELECT * FROM clientes WHERE cliente_id =?", [
    id,
  ]);
  res.json(rows[0]);
} catch (error) {
  return res
    .status(500)
    .json({ message: "Algo anda mal... favor de verificar" });
}
};

//Eliminar
export const eliminarCliente = async (req, res) => {
  try{
  const [data] = await pool.query("DELETE FROM clientes WHERE cliente_id=?", [
    req.params.id,
  ]);
  if (data.affectedRows <= 0)
    return res.status(404).json({
      message: "Cliente no encontrado",
    });
  res.sendStatus(204);
} catch (error) {
  return res
    .status(500)
    .json({ message: "Algo anda mal... favor de verificar" });
}
  
};
