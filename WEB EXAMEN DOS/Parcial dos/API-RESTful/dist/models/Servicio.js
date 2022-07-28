"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servicio = void 0;
const mongoose_1 = require("mongoose");
const ServicioSchema = new mongoose_1.Schema({
    id: {
        type: Number,
        default: 0,
        requerid: [true, `Id requerido`],
    },
    nombre: {
        type: String,
        requerid: [true, `Tipo de nombre requerido`],
    },
    precio: {
        type: String,
        requerid: [true, `La Direccion es requerida`],
    }
});
const Servicio = (0, mongoose_1.model)('Servicio', ServicioSchema);
exports.Servicio = Servicio;
