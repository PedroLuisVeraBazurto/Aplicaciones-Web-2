import {Request,Response,NextFunction} from 'express'
import {validationResult} from 'express-validator'

//Se realiza la validacion de campo en caso de presentarse algun error mandar un json errors
const validarCampo=(req:Request ,res:Response,next:NextFunction)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors)
    }
    next()
}
//Exportamos la funcion 
export{validarCampo}