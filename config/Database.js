import { Sequelize } from "sequelize";

// Konfigurasi koneksi database
const db = new Sequelize('auth_db', 'customer', 'Thoriq1414', {
    host: "34.136.238.133", // ganti dengan IP publik atau private IP Google Cloud SQL Anda
    dialect: "mysql",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // Set to true if you have the CA certificate
        }
    }
});

export default db;
