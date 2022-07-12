"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarContraseña = exports.validacionNombre = exports.validarCampo = void 0;
const express_validator_1 = require("express-validator");
const validarCampo = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    next();
};
exports.validarCampo = validarCampo;
const validacionNombre = [
    (0, express_validator_1.check)('Monto')
        .not()
        .notEmpty().withMessage('El monto no puede estar vacío'),
    (req, res, next) => {
        validarCampo(req, res, next);
    }
];
exports.validacionNombre = validacionNombre;
const validarContraseña = [
    (0, express_validator_1.check)('Tipo_pago')
        .not()
        .notEmpty().withMessage('El Tipo_pago no puede estar vacío'),
    (req, res, next) => {
        validarCampo(req, res, next);
    }
];
exports.validarContraseña = validarContraseña;
