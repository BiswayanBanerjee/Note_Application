import mysql from "mysql2/promise";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Ensure port is treated as a number
const DB_PORT = parseInt(process.env.DB_PORT || "3306", 10);

const mysqlPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: DB_PORT,  // Ensure this is a number
});

export { mysqlPool };
