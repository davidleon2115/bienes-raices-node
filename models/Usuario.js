import { Datatypes } from 'sequelize';
import db from '../config/db';

const Usuario = db.define('usuarios', {
    nombre: {
        type: Datatypes.STRING,
        allowNull: false
    },
    email: {
        type: Datatypes.STRING,
        allowNull: false
    },
    password: {
        type: Datatypes.STRING,
        allowNull: false
    },
    token: {
        type: Datatypes.STRING,
        allowNull: false
    },
    confirmado: {
        type: Datatypes.BOOLEAN
    }
})

export default Usuario;