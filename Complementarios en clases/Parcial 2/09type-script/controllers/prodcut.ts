import {Producto} from '../models'
import {IProducto} from '../interfaces'
import {Request, Response} from 'express'

const obtenerproductos = async (req: Request, res: Response) =>{
    const { limite=10, desde=0 } =  req.query;
    const query = { estado:true };
   const [ total, productos ] = await  Promise.all([
        Producto.countDocuments(query),
        Producto.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
   ])
   //productos[0].filter(producto => producto.nombre==="")
   res.json({
       total,
       productos
   })
}
const obtenerproducto = async (req: Request, res: Response) =>{
    const {id} = req.params
    const producto : IProducto| null = await Producto.findById(id);
    //if Producto : IProducto 
    res.json(Producto)
}
const crearproducto = async (req: Request, res: Response) =>{
    const { estado, ...body } = req.body as IProducto;
    const existeProducto = await Producto.findOne ({nombre:body.nombre})
    if (existeProducto){
        return res.status(400).json({
            message:'El producto ${body.nombre} ya existe'
        })
    }
    const Producto1 = new Producto(body);
    const proNuevo = await Producto1.save();
    return res.status(200).json(proNuevo);
}
export{
    obtenerproducto,
    obtenerproductos,
    crearproducto
}