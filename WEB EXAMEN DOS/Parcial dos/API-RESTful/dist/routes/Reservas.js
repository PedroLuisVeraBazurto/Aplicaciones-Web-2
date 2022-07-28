"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const { Obtener_productos, Obtener_clientes, obtener_id, buscar, eliminarre } = controllers_1.Producto;
class ClienteRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.post('/', Obtener_productos);
        this.router.get('/', Obtener_clientes);
        this.router.put('/:id', buscar);
        this.router.get('/:id', obtener_id);
        this.router.delete('/:id', eliminarre);
    }
}
const clienteRoutes = new ClienteRoutes();
clienteRoutes.routes();
exports.default = clienteRoutes.router;
