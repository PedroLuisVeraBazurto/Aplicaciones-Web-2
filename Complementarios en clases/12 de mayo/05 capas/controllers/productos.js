/*const express = require ('express')
const app = express()*/
const {producto} = reqire ('../models')
const {response} = require ('express');
const producto = require('../models/producto');

const obtenerproductos = (req, res = response)=>{
//Estabkecer limites
    const {limite = 10, desde = 0} = req.query;
    const query = {estado:true};
    //Estado de promesa, ejecutar un arreglo de promesa
    //Sirve para que el array sea general
   const [total, productos]=  await Promise.all([
      //Consultar los resultados
    producto.countDocuments(query),
    producto.find(query) 
   ])
    res.join({
        total,
        productos
    })
}
const obtenerproducto = (req, res)=>{
    //Captura lo que retorna a consola
    //Consiultar id
    const {id} = req.params;
    const producto = await producto.findById(id);
    //Se transforma en Json
    res.json(producto);

}
const crearproducto = (req, res)=>{

    //mostrar todo menos estado
    const {estado, ...body} = req.body;
    //busqueda por nombre
    const productoExiste = await producto.findOne({nombre:body.nombre})
    if (productoExiste)
    {
        //400 siver psra error
        res.status(400).json{(
            message:
            //Corregir comilla
            'El producto con ese nombre ya existe' ${producto.nombre}
        )}
    }
    const producto = new producto(body);
    const productoNuevo = await producto.save();
    res.status(201).json(productoNuevo);


}
const actualizarproducto = (req, res)=>{

    //Vamos a enviar los atributos que queremos cambiar
    //Usa id para buscar 
    const {id} = req.params;
    const {estado, ...body} = req.body;
    //Await es una pequeña pausa mientras resuelve la funcion (Es necesario si no no funciona)
    //Actualizar
    const prodcutoModificado =  producto.findByIdAndUpdate(id, data, {new:true})
    res.json(prodcutoModificado)
}
const borrarproducto = (req, res)=>{
//Busca el id de la base de datos y lo remplaza por el guin bajo y a constante ID
    const {id} = req.params;
    const productoBorrado = await producto.findByIdAndUpdate(id, (estado:false),new:true});
    res.json(productoBorrado)

}
//Debemos exportar todo
module.exports = {
    obtenerproducto,
    obtenerproductos,
    actualizarproducto,
    crearproducto,
}