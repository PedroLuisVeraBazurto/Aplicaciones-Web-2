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


    check('Monto')
        .not()
        .notEmpty().withMessage('El monto no puede estar vacío'),
        
        
    (req:Request ,res:Response,next:NextFunction) => {

        validarCampo(req, res, next)

    }

]
const validarContraseña = [


    check('Tipo_pago')
        .not()
        .notEmpty().withMessage('El Tipo_pago no puede estar vacío'),
        
        
    (req:Request ,res:Response,next:NextFunction) => {

        validarCampo(req, res, next)

    }

]

export{validarCampo,
    validacionNombre,
    validarContraseña}