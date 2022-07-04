"use strict";
//importamos moongose como parte de la base de datos que se va a usar
Object.defineProperty(exports, "__esModule", { value: true });
exports.Administrador = void 0;
const mongoose_1 = require("mongoose");
const AdministradoresSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, `El nombre del administrador es obligatorio`],
        unique: true
    },
    usuario: {
        type: String,
        required: [true, `El nombre de usuario es obligatorio`],
        unique: true
    },
    correo: {
        type: String,
        required: [true, `El correo es obligatorio`],
        unique: true
    },
    contrasena: {
        type: String,
        required: [true, `La contraseña es obligatoria`],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true,
        required: true,
    }
});
const Administrador = (0, mongoose_1.model)('Administrador', AdministradoresSchema);
exports.Administrador = Administrador;
