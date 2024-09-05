import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config({ path: "../../.env" });
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;


// Cria um pool de conexões com o MySQL
export const database = mysql.createPool({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    waitForConnections: true,
    connectionLimit: 10, // Limite de conexões simultâneas
    queueLimit: 0        // Sem limite de requisições na fila
});

database.getConnection()
    .then(connection => {
        console.log('Connected to the database!');
        connection.release(); // Libera a conexão de volta para o pool
    })
    .catch(err => {
        console.error('Error connecting to the database:', err);
    });
