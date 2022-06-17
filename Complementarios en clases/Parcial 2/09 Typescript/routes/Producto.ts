import {Router} from 'express'
import{check}from 'express-validator'
import{Producto} from '../controllers'
import funciones from '../middlewares'
const {validarCampo}=funciones
const {crear_producto,Obtener_producto,Obtener_productos}=Producto
const router=Router()
router.get('/',Obtener_productos)
router.get('/:id', check('id','Debe ser un id de mongo').isMongoId(),validarCampo,Obtener_producto)
router.post('/',crear_producto)
export{router}