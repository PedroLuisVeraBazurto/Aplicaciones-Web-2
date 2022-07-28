import mongoose from "mongoose";
import {Schema, model} from "mongoose";
import{IServicio} from '../interfaces'
const ServicioSchema: mongoose.Schema= new Schema<IServicio>({
    id:{
        type: Number,
        default: 0,
        requerid:[true, `Id requerido`],
    },
    nombre:{
        type: String,
        requerid:[true, `Tipo de nombre requerido`],
    },
    precio:{
        type: String,
        requerid:[true, `La Direccion es requerida`],
    }
})
const Servicio:mongoose.Model<IServicio>= model<IServicio>('Servicio',ServicioSchema);
export{
    Servicio
}