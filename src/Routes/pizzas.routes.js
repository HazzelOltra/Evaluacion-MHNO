import { actualizarPizza, agregarPizza, eliminarPizza, traerPizza, traerPizzas } from "../Controllers/pizzas.controllers.js";

import { Router } from "express";

const router = Router();
router.get("/pizzas", traerPizzas);
router.get("/pizzas/:id", traerPizza);
router.post("/pizzas", agregarPizza);
router.patch("/pizzas/:id", actualizarPizza);
router.delete("/pizzas/:id", eliminarPizza);
export default router;
