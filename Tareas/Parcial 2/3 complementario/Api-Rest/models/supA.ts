
import mongoose from "mongoose";
import {Schema, model} from "mongoose";
import{Isuper} from '../interfaces'
const spSchema: mongoose.Schema= new Schema<Isuper>({
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
    Estado:{
        type:Boolean,
        default:true
    },
    Contrasena:{
        type:String,
    }
})
 const supera:mongoose.Model<Isuper>= model<Isuper>('supera',spSchema);
 export{
    supera
 }