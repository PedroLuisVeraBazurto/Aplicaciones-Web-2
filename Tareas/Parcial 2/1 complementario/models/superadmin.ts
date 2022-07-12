//Importamos las librerias
import mongoose from 'mongoose';
import {Schema, model} from "mongoose";
import {Isuperadmin} from '../interface/Iindex'
const spSchema: mongoose.Schema = new Schema < Isuperadmin>({
    Nombre: {
        type: 'string',
        required:[true,`El nombre del producto es obligatorio`],
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

const sp: mongoose.Model<Isuperadmin>= model<Isuperadmin>('Sp',spSchema)
export{sp}