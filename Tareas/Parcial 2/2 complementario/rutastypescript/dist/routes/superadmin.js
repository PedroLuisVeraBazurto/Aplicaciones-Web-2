"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controller");
const { Crearsuperadmin } = controller_1.Superadmin;
//import {} from '../middlewares'
class SuperAdminc {
    constructor() {
        //se declara luego
        this.router = (0, express_1.Router)();
        this.routes();
    }
    //Va primero
    routes() {
        this.router.post('/', Crearsuperadmin);
    }
}
//crear nueva variable y validar
const superA = new SuperAdminc();
superA.routes();
exports.default = superA.router;
