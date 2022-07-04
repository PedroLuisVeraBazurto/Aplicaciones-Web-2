//exportamos express 
//Llamamos a nuestra carpeta de models y creamos nuestras variables
import { Request, Response } from 'express'
import {Isuperadmin} from '../interface/Iindex'
import {sp} from '../models'
//const {Administrador,Sala,Cliente,Tipo_sala,SuperAdmin}= require ('../models');


const Crearsuperadmin = async (req : Request, res : Response)=>{
    const body = req.body as Isuperadmin;
    const sup = new sp(req.body);
    const Validado = await sup.save();
    res.status(201).json(`El SuperAdministrador  se creo sastifactoriamente`);

}
export {
    Crearsuperadmin
}