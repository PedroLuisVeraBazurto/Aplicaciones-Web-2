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
const Obtener_clientes=async(req:Request,res:Response)=>{


    const SalaNueva = await Cliente.find({Estado:true}); //a esa constante donde guardamos usamos la funcion save para almacenar en la base de datos
    res.json(SalaNueva);
}
const obtener_id=async(req:Request,res:Response)=>{
    const {id}=req.params;


    const SalaNueva = await Cliente.findById(id); //a esa constante donde guardamos usamos la funcion save para almacenar en la base de datos
    res.json(SalaNueva);
}


const buscar=async(req:Request,res:Response)=>{
    const datos =req.query;
    const SalaNueva = await Cliente.find(datos); //a esa constante donde guardamos usamos la funcion save para almacenar en la base de datos
    res.json(SalaNueva);
}  
const cambiar_contra=async(req:Request,res:Response)=>{
    const campo=req.body;
    const SalaNueva = await Cliente.findByIdAndUpdate({_id:campo._id},{Contrasena:campo.Contrasena},{new: true}); //a esa constante donde guardamos usamos la funcion save para almacenar en la base de datos
   console.log(SalaNueva);
    if(!SalaNueva){
        return res.status(400).json({
            message:`No se actualizo la contraseña`
        });
    }
  
    res.status(201).json("El cliente cambio de contraseña sastifactoriamente");
}  
const eliminar_usu=async(req:Request,res:Response)=>{
    const campo=req.body;
    const SalaNueva = await Cliente.findByIdAndUpdate({_id:campo._id},{Estado:campo.Estado},{new: true}); //a esa constante donde guardamos usamos la funcion save para almacenar en la base de datos
   console.log(SalaNueva);
    if(!SalaNueva){
        return res.status(400).json({
            message:`No se pudo eliminar`
        });
    }
  
    res.status(201).json("Usuario eliminado");
} 
const cambio_total=async(req:Request,res:Response)=>{
    const {id}=req.params;
    const {estado, ...data}=req.body;
   const ProductoModificado=await Cliente.findByIdAndUpdate(id,data, {new:true});
   if(!ProductoModificado){
    return res.status(400).json({
        message:`No se actualizo `
    });
}

res.status(201).json(`El cliente ${data.Nombre} se cambio`);
}
export{
    Obtener_productos,Obtener_clientes,obtener_id,
    buscar,cambiar_contra,eliminar_usu,cambio_total
}