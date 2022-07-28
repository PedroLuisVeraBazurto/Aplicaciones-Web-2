import{Servicio} from '../models'
import {IServicio} from '../interfaces'
import{Request,Response}from 'express'
const Obtener_productos=async(req:Request,res:Response)=>{
    const body= req.body;
    console.log(body)
    const sala = new Servicio(body);//pasamos como paramtros el req.body dado que desde consola se paso estructurado para el server
    const ServicioNuevo = await sala.save(); //a esa constante donde guardamos usamos la funcion save para almacenar en la base de datos
    if(!ServicioNuevo){
        return res.status(400).json({
            message:`No se puedo registrar el servicio`
        });
    }
    res.status(201).json("El servicio se registro  con exito");//Enviamos un mensaje para la consola
}

const Obtener_servicio=async(req:Request,res:Response)=>{


    const Servico = await Servicio.find(); //a esa constante donde guardamos usamos la funcion save para almacenar en la base de datos
    console.log(Servico);
    res.json(Servico);
}

const obtener_id=async(req:Request,res:Response)=>{
    const {id}=req.params;

console.log(id);
    const actualizo = await Servicio.findById({_id:id}); //a esa constante donde guardamos usamos la funcion save para almacenar en la base de datos
 
    res.json(actualizo);
}


const actualizo=async(req:Request,res:Response)=>{
    const datos =req.params;
    const datoss =req.body;
   console.log(datos);
   console.log(datoss);
   const SalaNueva = await Servicio.findByIdAndUpdate({_id:datos.id},datoss,{new: true})
   res.status(201).json("Se actualizo el servicio con exito");
}  

//>>>>

const eliminarre=async(req:Request,res:Response)=>{
    const id =req.params// Obtiene los datos enviados desde la consola.
    console.log(id);//Imprime los datos.
    //Usamos una función para encontrar el documento coincidente, lo actualiza de acuerdo al argumento 
   //de actualización y devuelve el documento encontrado.*/
    const SalaNueva = await Servicio.findByIdAndDelete({_id:id.id})
   
    res.status(201).json("Se elimino el servicio con exito"); //Envia una respuesta JSON.
} 



export{
    Obtener_productos,Obtener_servicio,obtener_id,
    actualizo,eliminarre
}