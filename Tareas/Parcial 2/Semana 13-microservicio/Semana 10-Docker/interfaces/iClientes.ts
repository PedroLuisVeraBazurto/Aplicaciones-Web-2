//import mongoose from "mongoose";
export interface IClientes{
    Nombre:String;
    Usuario:String;
    Celular?:String;
    Correo:String;
    Contrasena:String;
  //  idCliente:mongoose.Types.ObjectId
}