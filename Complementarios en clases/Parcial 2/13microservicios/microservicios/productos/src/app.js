const express = require('express')
const app = express()

const respuesta = {
    data: [],
    arquitectura: 'Microservicio',
    descripcion: 'Productos Micro'

}

app.get('/api/v2/productos', (req, res) => {
    respuest.data=[]
    respuesta.data.push("pizza","coca")
    console.log(`Microservicio de productos`);
    return res.send(respuesta)
})

module.exports = app;