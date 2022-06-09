import {Router} from 'express'
import {check} from 'express-validator'
import {Producto} from '../controllers'
import funciones from '../middlewares'

const {validarCampos} = funciones
const {crearproducto, obtenerproducto, obtenerproductos} = Producto

const router = Router()

router.get('/', obtenerproducto)
router.get('/:id', check('id', 'Debe ser un id de mongo').isMongoId()
,validarCampos,
 obtenerproductos)
router.post('/', check('nombre', 'Nombre obligatorio ').not().isEmpty(),validarCampos
,crearproducto)

export {router}
