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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Obtener_productos = void 0;
const models_1 = require("../models");
const Obtener_productos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const sala = new models_1.Cliente(body); //pasamos como paramtros el req.body dado que desde consola se paso estructurado para el server
    const SalaNueva = yield sala.save(); //a esa constante donde guardamos usamos la funcion save para almacenar en la base de datos
    if (!SalaNueva) {
        return res.status(400).json({
            message: `El cliente no se guardo`
        });
    }
    res.status(201).json("El cliente se creo sastifactoriamente"); //Enviamos un mensaje para la consola
});
exports.Obtener_productos = Obtener_productos;
