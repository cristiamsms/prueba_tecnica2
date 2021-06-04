"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_1 = require("../controllers/usuario");
const validar_jwt_1 = __importDefault(require("../middlewares/validar-jwt"));
const router = express_1.Router();
router.post('/', usuario_1.postUsuario);
router.get('/renew', validar_jwt_1.default, usuario_1.renewUsuario);
exports.default = router;
//# sourceMappingURL=usuarios.js.map