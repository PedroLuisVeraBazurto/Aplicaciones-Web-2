const express = require('express')
const app = express()

const respuesta = {
    data: [],
    arquitectura: 'Microservicio',
    descripcion: 'Usuarios Micro'

}

app.get('/api/v2/usuarios', (req, res) => {
    respuest.data=[]
    respuesta.data.push("administrador","superadministrador")
    console.log(`Microservicio de usuarios`);
    return res.send(respuesta)
})

module.exports = app;