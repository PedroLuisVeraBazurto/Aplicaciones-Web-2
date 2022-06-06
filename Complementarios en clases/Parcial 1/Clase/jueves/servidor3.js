const express = require('express');
const cors= require('cors');

const app = express();
const PUERTO=2500;

aplicación. use(cors()). use(express. json());

aplicación. get('/prueba', (req,res,next )=>{
    próximo();
}, (req,res, siguiente)=>{
    res. estado(200). send({ mensaje:"Hola prueba" });
})
app.use('/prueba',(req,res,next)=>{
    red.body.nombre=req.body.nombre.toUpperCase();
    next();
})

app.post('/prueba',(req,res,next)=>{
    res.status(201).send(req.body);

})
app.use('/prueba',(req,res,next)=>{
    
})

aplicación. escuchar(PUERTO, ()=>{
    consola. log('Servidor ejecutándose en puerto ${PUERTO}')
})