import { traerEmpleado,traerEmpleados,actualizarEmpleado, eliminarEmpleado, agregarEmpleado } from "../Controllers/empleados.controllers.js";
import { Router } from "express";

const router = Router();
router.get("/empleados/:id", traerEmpleado);
router.post("/empleados", agregarEmpleado);
router.get("/empleados", traerEmpleados);
router.delete("/empleados/:id", eliminarEmpleado);
router.patch("/empleados/:id", actualizarEmpleado);

export default router;
