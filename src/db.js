import { createPool } from "mysql2/promise";
//revisar conexion a la base de datos creada

export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "Lolipop_60",
  port: "3306",
  database: 'pizzeria'
})
