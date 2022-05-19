const { Schema, model } = require('mongoose')
//Se crea la estrucutura que tendrà como entidad y sus atributos para la base de datos
const ProductoSchema = Schema({
   nombre: {
       type: String,
       required: [true, `El nombre del producto es obligatorio`],
       unique:true
   },
   estado: {
       type: Boolean,
       default: true,
       required:true
   },
   precio:{
       type:Number,
       default:0
   },
   costo:{
       type:Number,
       default:0
   },
   minimo:{
       type:Number,
       default:0
   },
   stock:{
       type:Number,
       default:0
   }
})

module.exports =  model('Producto',  ProductoSchema );