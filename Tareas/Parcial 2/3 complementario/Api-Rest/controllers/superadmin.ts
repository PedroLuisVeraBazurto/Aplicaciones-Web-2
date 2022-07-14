import{supera} from '../models'
import {Isuper} from '../interfaces'
import{Request,Response}from 'express'
const Obtener_Sp=async(req:Request,res:Response)=>{
    const body= req.body as Isuper;
    const sala = new supera(body);//pasamos como paramtros el req.body dado que desde consola se paso estructurado para el server
    const SalaNueva = await sala.save(); //a esa constante donde guardamos usamos la funcion save para almacenar en la base de datos
    if(!SalaNueva){
        return res.status(400).json({
            message:`El super administrador no ha sido creado`
        });
    }
    res.status(201).json("El super administrador ha sido creado");//Enviamos un mensaje para la consola
}
const Obtener_Spa=async(req:Request,res:Response)=>{


    const SalaNueva = await supera.find({Estado:true}); //a esa constante donde guardamos usamos la funcion save para almacenar en la base de datos
    res.json(SalaNueva);
}
const obtener_id=async(req:Request,res:Response)=>{
    const {id}=req.params;


    const SalaNueva = await supera.findById(id); //a esa constante donde guardamos usamos la funcion save para almacenar en la base de datos
    res.json(SalaNueva);
}


const buscaA=async(req:Request,res:Response)=>{
    const datos =req.query;
    const SalaNueva = await supera.find(datos); //a esa constante donde guardamos usamos la funcion save para almacenar en la base de datos
    res.json(SalaNueva);
}  
const cambiar_contra=async(req:Request,res:Response)=>{
    const campo=req.body;
    const SalaNueva = await supera.findByIdAndUpdate({_id:campo._id},{Contrasena:campo.Contrasena},{new: true}); //a esa constante donde guardamos usamos la funcion save para almacenar en la base de datos
   console.log(SalaNueva);
    if(!SalaNueva){
        return res.status(400).json({
            message:`No se actualizo la contraseña`
        });
    }
  
    res.status(201).json("El super administrador cambio de contraseña sastifactoriamente");
}  
const eliminar_admin=async(req:Request,res:Response)=>{
    const campo=req.body;
    const SalaNueva = await supera.findByIdAndUpdate({_id:campo._id},{Estado:campo.Estado},{new: true}); //a esa constante donde guardamos usamos la funcion save para almacenar en la base de datos
   console.log(SalaNueva);
    if(!SalaNueva){
        return res.status(400).json({
            message:`No se ha podido eliminar`
        });
    }
  
    res.status(201).json("Super administrador eliminado");
} 
const cambio_total=async(req:Request,res:Response)=>{
    const {id}=req.params;
    const {estado, ...data}=req.body;
   const ProductoModificado=await supera.findByIdAndUpdate(id,data, {new:true});
   if(!ProductoModificado){
    return res.status(400).json({
        message:`No se actualizo `
    });
}

res.status(201).json(`El superadministrador ${data.Nombre} se cambio`);
}
export{
    Obtener_Spa,Obtener_Sp,obtener_id,
    buscaA,cambiar_contra,eliminar_admin,cambio_total
}