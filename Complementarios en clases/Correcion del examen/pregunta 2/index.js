//localhost:3000/api/uno
const express = require('express'); //REQUERIMOS EXPRESS

//CONFIG PUERTO
const port = process.env.PORT || 3000;

//RUTAS
const computadora_route = require('./routes/Usuario')

//INICIALIZAR EXPRESS
const app = express();

//CONFIG SERVER
app.use(express.json());

//USO DE RUTA SELECCIONADAS
app.use('/api', computadora_route,(error, req, res, next) => {
    res.status(400).json({
        status: 'error',
        message: "No existe la ruta",
    });
});
app.use('/api',(error, req, res, next) => {
    res.status(400).json({
        status: 'error',
        message: "No existe la ruta",
    });
});

//CONFIG APP
app.listen(port, function() {
    console.log("API Rest corriendo en el puerto: " + port);
    console.log(" " + " " + " " +" " + " " + " " +" " + " " + " " + "CONEXION CORRECTA");
});

