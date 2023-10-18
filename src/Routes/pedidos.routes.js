import { obtenerPedido, obtenerPedidos, agregarPedido, eliminarPedido, actualizarPedido} from "../Controllers/pedidos.controllers.js";
import { Router } from "express";

const router = Router();
router.get("/pedidos", obtenerPedidos);
router.get("/pedidos/:id", obtenerPedido);
router.post("/pedidos", agregarPedido);
router.patch("/pedidos/:id", actualizarPedido);
router.delete("/pedidos/:id", eliminarPedido);

export default router;
