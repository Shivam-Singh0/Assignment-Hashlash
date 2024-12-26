import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();


// Create the connection pool. The pool-specific settings are the defaults
export const pool = mysql.createPool({
  host: 'localhost',
  user: process.env.user,
  password: process.env.password,
  database: process.env.database
  
});
