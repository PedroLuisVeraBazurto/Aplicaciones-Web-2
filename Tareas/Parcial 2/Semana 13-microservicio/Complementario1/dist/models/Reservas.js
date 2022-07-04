"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reservas = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const ClienteSchema = new mongoose_2.Schema({
    Monto: {
        type: Number,
        default: 0,
        requerid: [true, `Monto requerido`],
    },
    Tipo_pago: {
        type: String,
        requerid: [true, `Tipo de pago requerido`],
    },
    Fecha: {
        type: Date,
        requerid: [true, `Fecha de pago requerida`],
    },
    Estado: {
        type: Boolean,
        requerid: [true, `Estado requerido`],
    },
    idCliente: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "Cliente",
        requerid: [true, `id del cliente es requerido`],
    },
    idSala: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "Sala",
        requerid: [true, `id del sala es requerida`],
    },
});
const Reservas = (0, mongoose_2.model)('Reservas', ClienteSchema);
exports.Reservas = Reservas;
