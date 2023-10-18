import {traerCliente, traerClientes, agregarCliente, actualizarCliente, eliminarCliente} from "../Controllers/clientes.controllers.js";
import { Router } from "express";

const ClienteRouter = Router();
ClienteRouter.get("/clientes", traerClientes);
ClienteRouter.get("/clientes/:id", traerCliente);
ClienteRouter.post("/clientes", agregarCliente);
ClienteRouter.patch("/clientes/:id", actualizarCliente);
ClienteRouter.delete("/clientes/:id", eliminarCliente);
export default ClienteRouter;
