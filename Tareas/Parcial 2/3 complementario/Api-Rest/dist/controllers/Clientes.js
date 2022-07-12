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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cambio_total = exports.eliminar_usu = exports.cambiar_contra = exports.buscar = exports.obtener_id = exports.Obtener_clientes = exports.Obtener_productos = void 0;
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
const Obtener_clientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const SalaNueva = yield models_1.Cliente.find({ Estado: true }); //a esa constante donde guardamos usamos la funcion save para almacenar en la base de datos
    res.json(SalaNueva);
});
exports.Obtener_clientes = Obtener_clientes;
const obtener_id = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const SalaNueva = yield models_1.Cliente.findById(id); //a esa constante donde guardamos usamos la funcion save para almacenar en la base de datos
    res.json(SalaNueva);
});
exports.obtener_id = obtener_id;
const buscar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const datos = req.query;
    const SalaNueva = yield models_1.Cliente.find(datos); //a esa constante donde guardamos usamos la funcion save para almacenar en la base de datos
    res.json(SalaNueva);
});
exports.buscar = buscar;
const cambiar_contra = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const campo = req.body;
    const SalaNueva = yield models_1.Cliente.findByIdAndUpdate({ _id: campo._id }, { Contrasena: campo.Contrasena }, { new: true }); //a esa constante donde guardamos usamos la funcion save para almacenar en la base de datos
    console.log(SalaNueva);
    if (!SalaNueva) {
        return res.status(400).json({
            message: `No se actualizo la contraseña`
        });
    }
    res.status(201).json("El cliente cambio de contraseña sastifactoriamente");
});
exports.cambiar_contra = cambiar_contra;
const eliminar_usu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const campo = req.body;
    const SalaNueva = yield models_1.Cliente.findByIdAndUpdate({ _id: campo._id }, { Estado: campo.Estado }, { new: true }); //a esa constante donde guardamos usamos la funcion save para almacenar en la base de datos
    console.log(SalaNueva);
    if (!SalaNueva) {
        return res.status(400).json({
            message: `No se pudo eliminar`
        });
    }
    res.status(201).json("Usuario eliminado");
});
exports.eliminar_usu = eliminar_usu;
const cambio_total = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _a = req.body, { estado } = _a, data = __rest(_a, ["estado"]);
    const ProductoModificado = yield models_1.Cliente.findByIdAndUpdate(id, data, { new: true });
    if (!ProductoModificado) {
        return res.status(400).json({
            message: `No se actualizo `
        });
    }
    res.status(201).json(`El cliente ${data.Nombre} se cambio`);
});
exports.cambio_total = cambio_total;
