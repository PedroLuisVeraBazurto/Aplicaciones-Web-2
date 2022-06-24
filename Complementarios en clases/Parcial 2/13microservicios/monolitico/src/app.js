    const express = require('express')
    const app = express()

    const respuesta = {
        data: [],
        arquitectura: 'Monolitico',
        descripcion: 'Acceso a todas las rutas en un solo archivo'

    }

    app.use((req, res, next) => {
        respuesta.data = []
        next()
    })

    app.get('/api/v1/usuarios', (req, res) => {
        respuesta.data.push("administrador","superadministrador")
        return res.send (respuesta);
    })
    app.get('/api/v1/productos',(req, res) => {
        
        respuesta.data.push("pizza","coca")
        return res.send (respuesta);
    })
    app.get('/api/v1/clientes',(req, res) => {
        respuesta.data.push("Consumidor final", "Pedro","Eber")
        return res.send (respuesta);
    })

    module.exports =app;