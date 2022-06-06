const express = require('express');
const api = express.Router();
api.get('/ruta', (req, res) => {
    return res.status(200).send({
        message: '/ Ruta prueba existe y presenta el siguiente mensaje'
    });  

});

api.get('*', (req, res) => {
    return res.status(200).send({
        message: '/ la ruta no existe'
    });  

});
module.exports = api;