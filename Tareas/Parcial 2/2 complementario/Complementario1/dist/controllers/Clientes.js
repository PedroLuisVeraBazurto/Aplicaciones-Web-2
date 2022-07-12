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
    console.log(req.body); // Obtiene los datos enviados desde la consola.
    const id = req.body;
    const crear = new models_1.Cliente(id); // Manda a guarda en la base de datos.
    const guardar = crear.save();
    res.status(201).json("La reserva se realizo sastifactoriamente"); // Envia una respuesta JSON.
});
exports.Obtener_productos = Obtener_productos;
