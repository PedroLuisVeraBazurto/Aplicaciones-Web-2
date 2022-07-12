"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const mongoose_1 = require("mongoose");
const ClienteSchema = new mongoose_1.Schema({
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
    Contrasena: {
        type: String,
    }
});
const Cliente = (0, mongoose_1.model)('Cliente', ClienteSchema);
exports.Cliente = Cliente;
