import {Router} from 'express'
import{check}from 'express-validator'
import{Administrador} from '../controllers'
import funciones from '../middlewares'


const {validarCampo}=funciones

const {Obtener_administrador,Obtener_administradores,Crear_Administrador}=Administrador

const router=Router()

//Establacemos las rutas para cada funcion que se realizo en la carpeta de controllers/products.ts
router.get('/',Obtener_administradores)
router.get('/:id', check('id','Debe ser un id de mongo').isMongoId(),validarCampo,Obtener_administrador)
router.post('/',check('nombre','El nombre es obligatorio').not().isEmpty(),validarCampo,Crear_Administrador)



//Exportamos la variable router
export {router}
