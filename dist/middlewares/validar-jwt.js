"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validarJWT = (req, res, next) => {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la peticion'
        });
    }
    try {
        const payload = jsonwebtoken_1.default.verify(token, 'F-I-L-O-F-O-F-I-T-O44921462');
    }
    catch (error) {
        res.status(401).json({
            ok: false,
            msg: 'Token no Valido'
        });
    }
    next();
};
exports.default = validarJWT;
//# sourceMappingURL=validar-jwt.js.map