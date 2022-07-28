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
exports.eliminarre = exports.buscar = exports.obtener_id = exports.Obtener_clientes = exports.Obtener_productos = void 0;
const models_1 = require("../models");
const Obtener_productos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    console.log(body);
    const sala = new models_1.Servicio(body); //pasamos como paramtros el req.body dado que desde consola se paso estructurado para el server
    const SalaNueva = yield sala.save(); //a esa constante donde guardamos usamos la funcion save para almacenar en la base de datos
    if (!SalaNueva) {
        return res.status(400).json({
            message: `No se puedo registrar el servicio`
        });
    }
    res.status(201).json("El servicio se registro  con exito"); //Enviamos un mensaje para la consola
});
exports.Obtener_productos = Obtener_productos;
const Obtener_clientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const SalaNueva = yield models_1.Servicio.find({ Estado: true }); //a esa constante donde guardamos usamos la funcion save para almacenar en la base de datos
    console.log(SalaNueva);
    res.json(SalaNueva);
});
exports.Obtener_clientes = Obtener_clientes;
const obtener_id = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log(id);
    const SalaNueva = yield models_1.Servicio.findById({ _id: id }); //a esa constante donde guardamos usamos la funcion save para almacenar en la base de datos
    console.log(SalaNueva);
    res.json(SalaNueva);
});
exports.obtener_id = obtener_id;
const buscar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const datos = req.params;
    const datoss = req.body;
    console.log(datos);
    console.log(datoss);
    const SalaNueva = yield models_1.Servicio.findByIdAndUpdate({ _id: datos.id }, datoss, { new: true });
    res.status(201).json("Se actualizo el servicio con exito");
});
exports.buscar = buscar;
//>>>>
const eliminarre = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params; // Obtiene los datos enviados desde la consola.
    console.log(id); //Imprime los datos.
    //Usamos una función para encontrar el documento coincidente, lo actualiza de acuerdo al argumento 
    //de actualización y devuelve el documento encontrado.*/
    const SalaNueva = yield models_1.Servicio.findByIdAndDelete({ _id: id.id });
    res.status(201).json("Se elimino el servicio con exito"); //Envia una respuesta JSON.
});
exports.eliminarre = eliminarre;
