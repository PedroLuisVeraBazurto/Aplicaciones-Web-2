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
        .notEmpty().withMessage('El nombre no puede estar vacía')
        
  
        // Custom message
        
        .isLength({min: 5}).withMessage('La clave debe ser de 5 carácteres'),
       
        
    (req:Request ,res:Response,next:NextFunction) => {

        validarCampo(req, res, next)

    }

]
const validarContraseña = [


    check('Contrasena')
        .not()
        .notEmpty().withMessage('La clave no puede estar vacía')
        .isLength({min:4, max:16})

        // Custom message
        .withMessage('Password must be between 4 to 16 characters'),
        
        
    (req:Request ,res:Response,next:NextFunction) => {

        validarCampo(req, res, next)

    }

]

export{validarCampo,
    validacionNombre,
    validarContraseña}