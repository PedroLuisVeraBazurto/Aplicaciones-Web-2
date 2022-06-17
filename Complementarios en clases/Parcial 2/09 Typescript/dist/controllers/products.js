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
exports.crear_producto = exports.Obtener_productos = exports.Obtener_producto = void 0;
const models_1 = require("../models");
const Obtener_productos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //mas liviano await Producto.find().lean()
    const { limite = '10', desde = '0' } = req.query;
    const query = { estado: true };
    const [total, productos] = yield Promise.all([
        models_1.Producto.countDocuments(query),
        models_1.Producto.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);
    res.json({
        total,
        productos
    });
});
exports.Obtener_productos = Obtener_productos;
const Obtener_producto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const producto = yield models_1.Producto.findById(id);
    //const producto:IProducto=(await Producto.findById(id))!;
    res.json(producto);
});
exports.Obtener_producto = Obtener_producto;
const crear_producto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { estado } = _a, body = __rest(_a, ["estado"]);
    const existeProducto = yield models_1.Producto.findOne({ nombre: body.nombre });
    if (existeProducto) {
        return res.status(400).json({
            message: `El producto ${body.nombre} ya existe!`
        });
    }
    const producto = new models_1.Producto(body);
    const productoNuevo = yield producto.save();
    return res.status(200).json(productoNuevo);
});
exports.crear_producto = crear_producto;
