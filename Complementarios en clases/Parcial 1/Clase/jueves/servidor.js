//LIBRERIAS
const express=require('express');
const cors= require('cors');
const { response } = require('express');
const app=express();
const ruta=express.Router();
const PUERTO=3000;
let comidas =[];

app.use(cors()).use(express.json());
ruta.get('/',(req,res)=>{
res.status(200).send(comidas)
})
ruta.get('/:id')
ruta.post('/',(req,res)=>{
    const{body}=req;
    if(comidas.filter(c=>c.codigo===body.codigo).length>0){
        res.status(400).send({
            menssage:`El codigo ya existe `,
            response:body
        })
    }
    comidas.push(body);
    res.status(201).send({
        menssage:`El dato se inserto correctamente`,
        response:body
    })
})
ruta.put('/',(req,res)=>{
    const {codigo, description,tipo}=req.body;
if(comidas.filter(c=>c.codigo===codigo),length==0){
    menssage:`No se encuentra la comida que desea mocdificar`
}
let comida=comidas.filter(c=>c.codigo===codigo)[0];
comida.description=description;
comida.tipo=tipo;
res.status(200).send({
    menssage:`Dato modificado con exito`,
    response:comida
})
    }
)
ruta.delete('/:codigo',(req,res)=>{
    const{codigo}=req.params;
    comidas=comidas.filter(c=>c.codigo!==codigo);
res.status(200).send({
    menssage:`Eliminando correctamente`,
  
    
})
})
ruta.get('/:codigo',(req,res)=>{
    const{codigo}=req.params;
    comidas=comidas.filter(c=>c.codigo===codigo)
if( comidas.length>0   ){
res.status(200).send({
    menssage:`Eliminando correctamente`,
    response:comidas[0]
  
}

)
}else{
    res.status(400).send({
        menssage:`Comida con ese codigo no existe`,
    })
}

})
app.listen(PUERTO,()=>{
    console.log( `Servidor Funcionando en http://localhost: ${PUERTO}`)
})