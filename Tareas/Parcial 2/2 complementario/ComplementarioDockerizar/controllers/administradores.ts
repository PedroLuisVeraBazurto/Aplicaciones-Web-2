// //impotamos la varaible definida de la carpeta de models y tambien la variable de la carpeta de interfaces

import{Administrador} from '../models'
import {IAdministradores} from '../interfaces'
import{Request,Response}from 'express'

//Definir funciones
const Obtener_administradores=async(req:Request,res:Response)=>{
    //mas liviano await Producto.find().lean()
    const {limite='10',desde='0'}=req.query
    const query={estado:true};
    const [total,administradores]:[Number,IAdministradores[]]=await  Promise.all([
    Administrador.countDocuments(query),
    Administrador.find(query) 
    .skip(Number(desde))
    .limit(Number(limite))
    ])
    
    res.json({
        total,
        administradores
})
}
const Obtener_administrador=async(req:Request,res:Response)=>{
    const{id}=req.params
    const producto:IAdministradores|null=await Administrador.findById(id);
    //const producto:IProducto=(await Producto.findById(id))!;
    res.json(producto)
}
//Funcion de crear algun producto y se realizo una condicion que no permita guardar un producto existente
const Crear_Administrador=async(req:Request,res:Response)=>{
    const{estado,...body}=req.body as IAdministradores;
    const existeProducto=await Administrador.findOne({nombre:body.nombre})
    if(existeProducto){
        return res.status(400).json({
            message:`El producto ${body.nombre} ya existe!`
        });
    }
    const producto=new Administrador(body);
    const productoNuevo=await producto.save();
    return res.status(200).json(productoNuevo);
}
//Se exporta las funciones que se creó
export{
    Obtener_administrador,
    Obtener_administradores,
    Crear_Administrador
}