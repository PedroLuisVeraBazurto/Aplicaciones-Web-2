import{Reservas} from '../models'
import {iReservas} from '../interfaces'
import{Request,Response}from 'express'
const Obtener_productos=async(req:Request,res:Response)=>{
    console.log(req.body)// Obtiene los datos enviados desde la consola.
    const id =req.body;
    
  const crear=new Reservas(id)// Manda a guarda en la base de datos.
  const guardar=crear.save();   
  res.status(201).json("La reserva se realizo sastifactoriamente");// Envia una respuesta JSON.
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