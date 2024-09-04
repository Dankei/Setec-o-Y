import mysql from "mysql2"
import dotenv from "dotenv"

dotenv.config({ path: "../../.env" });

const host          = process.env.DB_HOST;
const user          = process.env.DB_USER;
const password      = process.env.DB_PASSWORD;
const name_db       = process.env.DB_NAME;
const port          = process.env.DB_PORT;

export const database = mysql.createConnection({
    host: host,
    port: port,
    user: user,
    database: name_db,
    password: password,
});

database.connect(err => {
    if (err) {
      console.error('Error connecting to the database:', err);
    } else {
      console.log('Connected to the database!');
    }
});
  