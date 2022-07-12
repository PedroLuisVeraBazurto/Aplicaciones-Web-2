import{Cliente} from '../models'
import {IClientes} from '../interfaces'
import{Request,Response}from 'express'
const Obtener_productos=async(req:Request,res:Response)=>{
    const body= req.body as IClientes;
    const sala = new Cliente(body);//pasamos como paramtros el req.body dado que desde consola se paso estructurado para el server
    const SalaNueva = await sala.save(); //a esa constante donde guardamos usamos la funcion save para almacenar en la base de datos
    if(!SalaNueva){
        return res.status(400).json({
            message:`El cliente no se guardo`
        });
    }
    res.status(201).json("El cliente se creo sastifactoriamente");//Enviamos un mensaje para la consola
}

/*
   const {body} = req.body;
    const sala = new Cliente(req.body);//pasamos como paramtros el req.body dado que desde consola se paso estructurado para el server
    const SalaNueva = await sala.save(); //a esa constante donde guardamos usamos la funcion save para almacenar en la base de datos
    res.status(201).json("El cliente se creo sastifactoriamente");//Enviamos un mensaje para la consola
*/
export{
    Obtener_productos,
}