"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarCampo = void 0;
const express_validator_1 = require("express-validator");
//Se realiza la validacion de campo en caso de presentarse algun error mandar un json errors
const validarCampo = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    next();
};
exports.validarCampo = validarCampo;
