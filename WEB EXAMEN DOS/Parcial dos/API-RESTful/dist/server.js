"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./database/config"));
const Servicio_1 = __importDefault(require("./routes/Servicio"));
class Server {
    //nota_routes = require('./routes/Products');
    constructor() {
        this.app = (0, express_1.default)();
        this.router = (0, express_2.Router)();
        this.port = process.env.PORT;
        this.paths = {
            cliente: '/api/adicionales', //definimos la ruta que tomara para cliente en el server
        };
        this.middlewares();
        this.routes();
        this.conectarBD();
        this.router.use('/v1/servicio', this.app);
        this._express = (0, express_1.default)().use(this.router);
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    conectarBD() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, config_1.default)();
        });
    }
    routes() {
        this.app.use(this.paths.cliente, Servicio_1.default);
    }
    listen() {
        this._express.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}
exports.Server = Server;
