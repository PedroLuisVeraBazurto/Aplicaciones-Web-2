
import mongoose from "mongoose";
import {Schema, model} from "mongoose";
import{IClientes} from '../interfaces'
const ClienteSchema: mongoose.Schema= new Schema<IClientes>({
    Nombre:{
        type:String,
        required:[true, `El nombre del producto es obligatorio`],
        unique:true
    },
    Usuario:{
        type:String,
        required:[true, `El usuario  es obligatorio`],
        unique:true
      
    },
    Celular:{
        type:String,
        default:'099999999'
    },
    Correo:{
        type:String,
    },
    Contrasena:{
        type:String,
    }
})
 const Cliente:mongoose.Model<IClientes>= model<IClientes>('Cliente',ClienteSchema);
 export{
    Cliente
 }