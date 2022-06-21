"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controllers/index");
const { Crearsuperadmin } = index_1.Superadmin;
//import {} from '../middlewares'
class SuperAdminc {
    constructor() {
        //se declara luego
        this.router = (0, express_1.Router)();
        this.routes();
    }
    //Va primero
    routes() {
        this.router.get('/', Crearsuperadmin);
    }
}
//crear nueva variable y validar
const superA = new SuperAdminc();
superA.routes();
exports.default = superA.router;
