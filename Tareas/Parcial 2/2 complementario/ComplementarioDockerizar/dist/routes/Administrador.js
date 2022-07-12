"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const controllers_1 = require("../controllers");
const middlewares_1 = __importDefault(require("../middlewares"));
const { validarCampo } = middlewares_1.default;
const { Obtener_administrador, Obtener_administradores, Crear_Administrador } = controllers_1.Administrador;
const router = (0, express_1.Router)();
exports.router = router;
//Establacemos las rutas para cada funcion que se realizo en la carpeta de controllers/products.ts
router.get('/', Obtener_administradores);
router.get('/:id', (0, express_validator_1.check)('id', 'Debe ser un id de mongo').isMongoId(), validarCampo, Obtener_administrador);
router.post('/', (0, express_validator_1.check)('nombre', 'El nombre es obligatorio').not().isEmpty(), validarCampo, Crear_Administrador);
