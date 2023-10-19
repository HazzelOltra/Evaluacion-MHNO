import express from "express";
import clientesRouter from "./Routes/clientes.routes.js";
import pizzasRouter from "./Routes/pizzas.routes.js";
import pedidosRouter from "./Routes/pedidos.routes.js";
import empleadosRouter from "./Routes/empleados.routes.js";

import './config.js'
const app = express();

app.use(express.json());
app.use('/api', pizzasRouter);
app.use('/api', clientesRouter);
app.use('/api', empleadosRouter);
app.use('/api', pedidosRouter);


app.use((req,res,next)=>{
    res.status(404).json({
        Message: "Ruta no existente... verificar!"
    })

})

export default app;