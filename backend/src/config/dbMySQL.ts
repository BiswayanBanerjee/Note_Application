// // import mysql from "mysql2/promise";

// // console.log("MYSQL_HOST:", process.env.MYSQL_HOST);
// // console.log("MYSQL_USER:", process.env.MYSQL_USER);
// // console.log("MYSQL_PASSWORD:", process.env.MYSQL_PASSWORD);
// // console.log("MYSQL_DATABASE:", process.env.MYSQL_DATABASE);

// // export const mysqlPool = mysql.createPool({
// //   host: process.env.MYSQL_HOST,
// //   user: process.env.MYSQL_USER,
// //   password: process.env.MYSQL_PASSWORD,
// //   database: process.env.MYSQL_DATABASE,
// // });
// import mysql from "mysql2/promise";

// // Directly include MySQL connection details
// const MYSQL_HOST = "sql12.freesqldatabase.com"; // Your MySQL host
// const MYSQL_USER = "sql12755688"; // Your MySQL username
// const MYSQL_PASSWORD = "kyi6QNnWj6"; // Your MySQL password
// const MYSQL_DATABASE = "sql12755688"; // Your MySQL database name
// const MYSQL_PORT=3306;

// export const mysqlPool = mysql.createPool({
//   host: MYSQL_HOST,
//   user: MYSQL_USER,
//   password: MYSQL_PASSWORD,
//   database: MYSQL_DATABASE,
//   port:MYSQL_PORT,
// });


import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

export const mysqlPool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT || 3306,
});
