"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generarJWT = (uid, name) => {
    return new Promise((resolve, reject) => {
        const payload = { uid, name };
        jsonwebtoken_1.default.sign(payload, 'F-I-L-O-F-O-F-I-T-O44921462', {
            expiresIn: '5h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se genero el token');
            }
            resolve(token);
        });
    });
};
exports.default = generarJWT;
//# sourceMappingURL=jwt.js.map