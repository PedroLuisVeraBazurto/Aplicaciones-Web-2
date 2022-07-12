import mongoose from "mongoose";
import {Schema, model} from "mongoose";
import{iReservas} from '../interfaces'
const ClienteSchema: mongoose.Schema= new Schema({
    Monto:{
        type: Number,
        default: 0,
        requerid:[true, `Monto requerido`],
    },
    Tipo_pago:{
        type: String,
        requerid:[true, `Tipo de pago requerido`],
    },
    Fecha:{
        type: Date,
        requerid:[true, `Fecha de pago requerida`],
    },
    Estado:{
        type: Boolean,
        requerid:[true, `Estado requerido`],
    },
    idCliente:{
        type:mongoose.Types.ObjectId,
        ref:"Cliente",
        requerid:[true, `id del cliente es requerido`],
    },
    idSala:{
        type:mongoose.Types.ObjectId,
        ref:"Sala",
        requerid:[true, `id del sala es requerida`],
    },
})
const Reservas:mongoose.Model<iReservas>= model<iReservas>('Reservas',ClienteSchema);
export{
    Reservas
}