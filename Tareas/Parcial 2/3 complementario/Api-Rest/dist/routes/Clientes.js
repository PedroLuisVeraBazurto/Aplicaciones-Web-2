"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const { Obtener_productos, Obtener_clientes, obtener_id, buscar, cambiar_contra, eliminar_usu, cambio_total } = controllers_1.Producto;
const middlewares_1 = require("../middlewares");
class ClienteRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.post('/', middlewares_1.validacionNombre, middlewares_1.validarContraseña, Obtener_productos);
        this.router.get('/', Obtener_clientes);
        this.router.get('/sesion', buscar);
        this.router.put('/cambio', cambiar_contra);
        this.router.put('/:id', cambio_total);
        this.router.put('/eliminar', eliminar_usu);
        this.router.get('/:id', obtener_id);
    }
}
const clienteRoutes = new ClienteRoutes();
clienteRoutes.routes();
exports.default = clienteRoutes.router;
