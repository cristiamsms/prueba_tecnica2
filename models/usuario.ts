import {DataTypes} from 'sequelize';
import db from '../database/connection';



const Usuario = db.define('Usuario',{
    nombre: {
        type:DataTypes.STRING
    },
    email: {
        type:DataTypes.STRING
    },
    password: {
        type:DataTypes.STRING
    }
});

export default Usuario;
