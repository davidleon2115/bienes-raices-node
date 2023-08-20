import Sequelize from 'sequelize';

const db = new Sequelize('bienesraices_node_mvc', 'root', 'root', {
    host: "localhost", // Host de la base de datos.
    port: 3306,
    dialect: 'mysql',
    define: {
        timestamps: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
})

export default db;