"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supera = void 0;
const mongoose_1 = require("mongoose");
const spSchema = new mongoose_1.Schema({
    Nombre: {
        type: String,
        required: [true, `El nombre del producto es obligatorio`],
        unique: true
    },
    Usuario: {
        type: String,
        required: [true, `El usuario  es obligatorio`],
        unique: true
    },
    Celular: {
        type: String,
        default: '099999999'
    },
    Correo: {
        type: String,
    },
    Estado: {
        type: Boolean,
        default: true
    },
    Contrasena: {
        type: String,
    }
});
const supera = (0, mongoose_1.model)('supera', spSchema);
exports.supera = supera;
