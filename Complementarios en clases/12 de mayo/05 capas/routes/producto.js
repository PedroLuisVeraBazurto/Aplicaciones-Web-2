const {router, Router} = require ('express');
//Sirve para visualizar si se estan realizando los proyectos
const {check} = require ('express-validator');
const {
    obtenerProducto,
    obetenerProductos,
    crearProducto,
    actualizarProducto,
    borrarProdcuto
} = require ('../controllers').producto;
const {validarCampos} = require('../middleware');

const router = Router();

router.get('/',obtenerProducto)
router.get('/:id', obetenerProductos)
router.post('/', crearProducto[check('nombre','El nombre es obligatorio').isEmpty()], crearProducto)
router.put('/id', actualizarProducto[check('nombre','El nombre es obligatorio').isEmpty()], actualizarProducto)
router.delete('/:id', [check ])