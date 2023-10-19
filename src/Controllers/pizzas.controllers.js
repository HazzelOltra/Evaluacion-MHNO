import { pool } from "../db.js";

export const Conexion = async (req, res) => {
  const [resultado] = await pool.query("");
  console.log(resultado);
  res.json(resultado[0]);
};

// Mostrar todos los empleados
export const traerPizzas = async (req, res) => {
  try{
  const { nombre, precio, descripcion, ingredientes, disponible} = req.body;
  const [data] = await pool.query("SELECT * FROM  pizzas", [nombre, precio, descripcion, ingredientes, disponible]);
  res.json(data);
} catch (error) {
  return res
    .status(500)
    .json({ message: "Algo anda mal... favor de verificar" });
}
};

// Mostrar un empleado
export const traerPizza = async (req, res) => {
  try{
  const [rows] = await pool.query("SELECT * FROM  pizzas where pizza_id=?", [
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
export const agregarPizza = async (req, res) => {
  try{
  const {nombre, precio, descripcion, ingredientes, disponible} = req.body;
  const [data] = await pool.query(
    "INSERT INTO pizzas (nombre, precio, descripcion, ingredientes, disponible) VALUES (?,?,?,?,?)",
    [nombre, precio, descripcion, ingredientes, disponible]
  );
  console.log(data);
  res.send({
    id: data.insertId,
    nombre, precio, descripcion, ingredientes, disponible});
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Algo anda mal... favor de verificar" });
  }
};

// Actualizar 
export const actualizarPizza = async (req, res) => {
  try{
  const { id } = req.params;
  const {nombre, precio, descripcion, ingredientes, disponible} = req.body;
  const [result] = await pool.query(
    "UPDATE pizzas SET nombre = IFNULL(?,nombre), precio = IFNULL(?,precio), descripcion = IFNULL(?,descripcion), ingredientes = IFNULL(?,ingredientes), disponible = IFNULL(?,disponible) where pizza_id = ?",
    [nombre, precio, descripcion, ingredientes, disponible, id]
  );

  if (result.affectedRows === 0)
    return res.status(404).json({
      message: "Esa pizza no existe!",
    });
  const [rows] = await pool.query("SELECT * FROM pizzas WHERE pizza_id =?", [
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
export const eliminarPizza = async (req, res) => {
  try{
  const [data] = await pool.query("DELETE FROM pizzas WHERE pizza_id=?", [
    req.params.id,
  ]);
  if (data.affectedRows <= 0)
    return res.status(404).json({
      message: "Pizza no existente",
    });
  res.sendStatus(204);
} catch (error) {
  return res
    .status(500)
    .json({ message: "Algo anda mal... favor de verificar" });
}
};
