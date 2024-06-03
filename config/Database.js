import { Sequelize } from "sequelize";

// Konfigurasi koneksi database
const db = new Sequelize('auth_db', 'customer', 'Thoriq1414', {
    host: "/cloudsql/project-thoriq:us-central1:notes",
    dialect: "mysql",
    logging: false,
    // e.g. host: '/cloudsql/my-awesome-project:us-central1:my-cloud-sql-instance'
    pool: {
        max: 2,
        min: 0,
        acquire: 10000,
        idle: 0
    },
    dialectOptions: {
        // e.g. socketPath: '/cloudsql/my-awesome-project:us-central1:my-cloud-sql-instance'
        // same as host string above
        socketPath: "/cloudsql/project-thoriq:us-central1:notes"
    },
    operatorsAliases: false
});

export default db;
