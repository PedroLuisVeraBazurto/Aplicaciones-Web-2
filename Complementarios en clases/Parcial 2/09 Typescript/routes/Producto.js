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
const { crear_producto, Obtener_producto, Obtener_productos } = controllers_1.Producto;
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', Obtener_productos);
router.get('/:id', (0, express_validator_1.check)('id', 'Debe ser un id de mongo').isMongoId(), validarCampo, Obtener_producto);
router.post('/', crear_producto);
