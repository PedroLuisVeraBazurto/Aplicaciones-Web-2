const express = require('express')
const app = express()

const respuesta = {
    data: [],
    arquitectura: 'Microservicio',
    descripcion: 'Cliente Micro'

}

app.get('/api/v2/clientes', (req, res) => {
    respuest.data=[]
    respuesta.data.push("Consumidor final", "Pedro", "Eber")
    console.log(`Microservicio de clientes`);
    return res.send(respuesta)
})

module.exports = app;