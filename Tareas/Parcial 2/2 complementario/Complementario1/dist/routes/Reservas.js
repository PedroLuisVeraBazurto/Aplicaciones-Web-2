"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const { Obtener_productos } = controllers_1.Producto;
const middlewares_1 = require("../middlewares");
class ClienteRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.post('/', middlewares_1.validacionNombre, middlewares_1.validarContraseña, Obtener_productos);
    }
}
const clienteRoutes = new ClienteRoutes();
clienteRoutes.routes();
exports.default = clienteRoutes.router;
