"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const { Obtener_Spa, Obtener_Sp, obtener_id, buscaA, cambiar_contra, eliminar_admin, cambio_total } = controllers_1.Producto;
class ClienteRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.post('/', Obtener_Sp);
        this.router.get('/', Obtener_Spa);
        this.router.get('/sesion', buscaA);
        this.router.put('/cambio', cambiar_contra);
        this.router.put('/:id', cambio_total);
        this.router.put('/eliminar', eliminar_admin);
        this.router.get('/:id', obtener_id);
    }
}
const clienteRoutes = new ClienteRoutes();
clienteRoutes.routes();
exports.default = clienteRoutes.router;
