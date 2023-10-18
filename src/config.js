import {config} from "dotenv";
config()

export const PORT = process.env.PORT || 3600
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'Lolipop_60'
export const DB_DATABASE = process.DB_DATABASE || 'pizzeria' 
export const DB_HOST = process.DB_HOST || 'localhost'
export const DB_PORT = process.DB_PORT || '3306'