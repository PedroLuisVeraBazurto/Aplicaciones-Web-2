import mongoose from "mongoose";
import {Schema, model} from "mongoose";
import { IProducto} from '../interfaces'

const ProductoSchema : mongoose.Schema = new Schema({
    nombre: {
        type: String,
        required: [true, `El nombre del producto es obligatorio`],
        unique:true
    },
    estado: {
        type: Boolean,
        default: true,
        required:true
    },
    precio:{
        type:Number,
        default:0
    },
    costo:{
        type:Number,
        default:0
    },
    minimo:{
        type:Number,
        default:0
    },
    stock:{
        type:Number,
        default:0
    }
 })
 
 const Producto10: mongoose.Model<IProducto> = model<IProducto>('Producto',  ProductoSchema );
 export {
     Producto10
 }