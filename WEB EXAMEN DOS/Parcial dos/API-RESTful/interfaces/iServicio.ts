//import mongoose from "mongoose";
export interface IServicio{
    Nsolicitud: Number;
    fecha:String;
    identificacion: String,
    Desde:String,
    Hasta:String,
    Beneficios:Number,
    Estado:Number
  //  idCliente:mongoose.Types.ObjectId
}