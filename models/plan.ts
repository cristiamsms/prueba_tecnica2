import {DataTypes} from 'sequelize';
import db from '../database/connection';


const Plan = db.define('Plan', {

    titulo: {
        type:DataTypes.STRING
    },
    valor: {
        type:DataTypes.INTEGER
    },
    imagen: {
        type:DataTypes.STRING
    },
    descripcion: {
        type:DataTypes.STRING
    },
    detalle: {
        type:DataTypes.STRING
    },
    estado: {
        type:DataTypes.BOOLEAN
    }
});

export default Plan;