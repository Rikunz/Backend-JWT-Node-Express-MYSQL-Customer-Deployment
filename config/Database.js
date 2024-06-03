import { Sequelize } from "sequelize";

// Konfigurasi koneksi database
const db = new Sequelize('auth_db', 'customer', 'Thoriq1414', {
    host: "34.136.238.133",
    dialect: "mysql",
    logging: console.log, // enable logging
    dialectOptions: {
        connectTimeout: 60000
    }
});


export default db;
