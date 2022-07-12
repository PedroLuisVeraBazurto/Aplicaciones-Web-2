//import mongoose from "mongoose";
export interface IClientes{
    Nombre:String;
    Usuario:String;
    Celular?:String;
    Correo:String;
    Contrasena:String;
    Estado?:Boolean;
  //  idCliente:mongoose.Types.ObjectId
}