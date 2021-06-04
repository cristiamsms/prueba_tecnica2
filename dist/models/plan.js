"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const Plan = connection_1.default.define('Plan', {
    titulo: {
        type: sequelize_1.DataTypes.STRING
    },
    valor: {
        type: sequelize_1.DataTypes.INTEGER
    },
    imagen: {
        type: sequelize_1.DataTypes.STRING
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    detalle: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
});
exports.default = Plan;
//# sourceMappingURL=plan.js.map