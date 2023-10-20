import { pool } from "../db.js";

export const agregarPedido = async (req, res) => {
  try {
    const { cliente_id, pizza_id, empleado_id, cantidad, fecha_pedido, estado_pedido } = req.body;
    const [data] = await pool.query(
      "INSERT INTO pedidos (cliente_id, pizza_id, empleado_id, cantidad, fecha_pedido, estado_pedido) VALUES (?,?,?,?,?,?)",
      [cliente_id, pizza_id, empleado_id, cantidad, fecha_pedido, estado_pedido]
    );
    console.log(data);
    res.send({
      id: data.insertId,
      cliente_id,
      pizza_id,
      empleado_id,
      cantidad,
      fecha_pedido,
      estado_pedido,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Algo anda mal... favor de verificar" });
  }
};

export const eliminarPedido = async (req, res) => {
  try {
    const [data] = await pool.query("DELETE FROM pedidos WHERE pedido_id=?", [
      req.params.id,
    ]);
    if (data.affectedRows <= 0)
      return res.status(404).json({
        message: "Pedido no existente...",
      });
    res.sendStatus(204);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Algo anda mal... favor de verificar" });
  }
};

export const obtenerPedido = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM pedidos where pedido_id=?",
      [req.params.id]
    );
    res.json(rows);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Algo anda mal... favor de verificar" });
  }
};

export const obtenerPedidos = async (req, res) => {
  try {
    const { cliente_id, pizza_id, empleado_id, cantidad, fecha_pedido, estado_pedido } = req.body;
    const [data] = await pool.query("SELECT * FROM  pedidos", [
      cliente_id, pizza_id, empleado_id, cantidad, fecha_pedido, estado_pedido
    ]);
    res.json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Algo anda mal... favor de verificar" });
  }
};

export const actualizarPedido = async (req, res) => {
  try {
    const { id } = req.params;
    const { cliente_id, pizza_id, empleado_id, cantidad, fecha_pedido, estado_pedido } = req.body;
    const [result] = await pool.query(
      "UPDATE pedidos SET cliente_id = IFNULL(?,cliente_id), pizza_id = IFNULL(?,pizza_id), empleado_id = IFNULL (?,empleado_id), cantidad = IFNULL (?,cantidad), fecha_pedido = IFNULL (?,fecha_pedido), estado_pedido = IFNULL (?,estado_pedido) WHERE pedido_id =?",
      [cliente_id, pizza_id, empleado_id, cantidad, fecha_pedido, estado_pedido, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "El pedido no existe!",
      });
    const [rows] = await pool.query(
      "SELECT * FROM pedidos WHERE pedido_id =?",
      [id]
    );
    res.json(rows[0]);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Algo anda mal... favor de verificar" });
  }
};
