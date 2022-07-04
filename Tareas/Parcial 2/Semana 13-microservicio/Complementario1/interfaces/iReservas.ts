import mongoose from "mongoose";
export interface iReservas{
  Monto:Number;
  Tipo_pago:String;
  Fecha?:Date;
  Estado:Boolean;
  idCliente:mongoose.Types.ObjectId;
  idSala:mongoose.Types.ObjectId;
}