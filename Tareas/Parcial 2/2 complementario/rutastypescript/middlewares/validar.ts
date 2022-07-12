import {Request,Response,NextFunction} from 'express'
import {validationResult ,check} from 'express-validator'


const validarCampo=(req:Request ,res:Response,next:NextFunction)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors)
    }
    next()
}
const validacionNombre = [


    check('Nombre')
        .not()
        .notEmpty().withMessage('El nombre no puede estar vacía'),
        
        
    (req:Request ,res:Response,next:NextFunction) => {

        validarCampo(req, res, next)

    }

]
const validarContraseña = [


    check('Contrasena')
        .not()
        .notEmpty().withMessage('La clave no puede estar vacía'),
        
        
    (req:Request ,res:Response,next:NextFunction) => {

        validarCampo(req, res, next)

    }

]

export{validarCampo,
    validacionNombre,
    validarContraseña}