"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renewUsuario = exports.postUsuario = exports.getUsuario = void 0;
const jwt_1 = __importDefault(require("../helpers/jwt"));
const usuario_1 = __importDefault(require("../models/usuario"));
const getUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "getUsuario",
        id
    });
};
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!(email && password)) {
        return res.status(400).json({ message: "email y password requeridos" });
    }
    try {
        const usuario = yield usuario_1.default.findOne({ where: { email } });
        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Un usuario existe con ese correo'
            });
        }
        if (password !== usuario.password) {
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            });
        }
        const token = yield jwt_1.default(usuario.id, usuario.nombre);
        res.json({
            ok: true,
            uid: usuario.id,
            name: usuario.nombre,
            token
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
});
exports.postUsuario = postUsuario;
const renewUsuario = (req, res) => {
    res.json({
        ok: true,
        msg: "renewUsuario",
    });
};
exports.renewUsuario = renewUsuario;
//# sourceMappingURL=usuario.js.map