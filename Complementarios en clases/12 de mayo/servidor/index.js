//Estructurar un servidor y un servicio REST
//Create==>post
//Read ==> get
//update==>patch-pot
//delete==> Delete
 
const express=require('express');
const cors= require('cors');
const app =express();
const PUERTO =2500;

//permite agregar midleware , es para inyectar , agregando corse para q cualquier ip 
//se conecte, se menaja con json 
app.use(cors()).use(express.json());
//Definir ruta para trabajar por modulos
app.get('/prueba',(req,res,next)=>{
next();
}, (req, res, next)=>{
res.status(200).send({mensaje:"Hola  prueba"});
})
app.use('/prueba',(req,res,next)=>{
    req.body.nombre=req.body.nombre.toUpperCase();
    next();
})

app.post('/prueba',(req,res,next)=>{
res.status(201).send(req.body);
})

app.use('/prueba',(req,res,next)=>{
    console.log('Despues del middleware')
})





app.listen(PUERTO, ()=>{
    console.log( `Servidor  ejecutandose en puerto ${PUERTO}`)
})
/*
npm init --y
npm i express
 npm i nodemon --save-dev
npm i cors

*/