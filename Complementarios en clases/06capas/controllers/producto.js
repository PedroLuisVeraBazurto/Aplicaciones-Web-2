const { response } = require('express')
 const { Producto } = require('../models')
//Se crea funciones algunas funciones fundamentales
 const obtenerProductos = async  (req,res = response )=>{
     const { limite=10, desde=0 } =  req.query;
     const query = { estado:true };
    const [ total, productos ] = await  Promise.all([
         Producto.countDocuments(query),
         Producto.find(query)
    ])
    res.json({
        total,
        productos
    })
}
const obtenerProducto = async (req,res= response) =>{
    const {id} = req.params;
    const producto = await  Producto.findById(id);
    res.json(producto);
}
//Funcion para crear un producto
const crearProducto = async (req,res )=>{
        const {  estado,  ...body } =  req.body;

        const productoExiste = await Producto.findOne({ nombre:body.nombre });
        if (productoExiste)
        {
            res.status(400).json({
                message:
                `El producto con ese nombre ya existe ${productoExiste.nombre}`
            })
        }
        const producto = new Producto(body);
        const productoNuevo =  await producto.save();
        res.status(201).json(productoNuevo);

}
//Funcion para actualizar un producto
const actualizarProducto = async (req,res )=>{
    const {id} = req.params;
    const { estado, ...data } =  req.body;
    const productoModificado= await Producto.findByIdAndUpdate(id, data , { new:true } );
      res.json(productoModificado);
}
//Funcion para eliminar un producto => En esta funcion solo se le cambia el estado true a false para que no sea eliminado de la base de datos y nomas se mantenga como false
const borrarProducto = async (req,res)=>{
    const { id } = req.params
    const productoBorrado= await Producto.findByIdAndUpdate(id,{estado:false}
        , {new:true});
    res.json(productoBorrado);
}

//Se exporta cada una de las funciones
module.exports = {
    obtenerProductos,
    obtenerProducto,
    crearProducto,
    actualizarProducto,
    borrarProducto
}


