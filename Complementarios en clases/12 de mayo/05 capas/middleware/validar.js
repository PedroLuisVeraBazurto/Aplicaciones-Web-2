const {validationResult} = require ('express-validator')
//req almacena los campos via consola
//res envia respuesta
//next saltarse a la siguiente

const validarCampos = (req, res, next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty())
    {
        res.status(400).json(!errors);
    }
    next();
}