"use strict";
// //impotamos la varaible definida de la carpeta de models y tambien la variable de la carpeta de interfaces
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
exports.Crear_Administrador = exports.Obtener_administradores = exports.Obtener_administrador = void 0;
const models_1 = require("../models");
//Definir funciones
const Obtener_administradores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //mas liviano await Producto.find().lean()
    const { limite = '10', desde = '0' } = req.query;
    const query = { estado: true };
    const [total, administradores] = yield Promise.all([
        models_1.Administrador.countDocuments(query),
        models_1.Administrador.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);
    res.json({
        total,
        administradores
    });
});
exports.Obtener_administradores = Obtener_administradores;
const Obtener_administrador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const producto = yield models_1.Administrador.findById(id);
    //const producto:IProducto=(await Producto.findById(id))!;
    res.json(producto);
});
exports.Obtener_administrador = Obtener_administrador;
//Funcion de crear algun producto y se realizo una condicion que no permita guardar un producto existente
const Crear_Administrador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { estado } = _a, body = __rest(_a, ["estado"]);
    const existeProducto = yield models_1.Administrador.findOne({ nombre: body.nombre });
    if (existeProducto) {
        return res.status(400).json({
            message: `El producto ${body.nombre} ya existe!`
        });
    }
    const producto = new models_1.Administrador(body);
    const productoNuevo = yield producto.save();
    return res.status(200).json(productoNuevo);
});
exports.Crear_Administrador = Crear_Administrador;
