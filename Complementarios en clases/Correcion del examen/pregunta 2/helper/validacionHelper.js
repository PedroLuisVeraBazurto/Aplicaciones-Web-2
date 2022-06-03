const {ValidarR} = require('express-validator')

const ValidarR = (req, res, next) => {

    try{

        ValidarR(req).throw()
        return next(); 
    }catch(err){

        res.status(403).send({errors:"No esiste" }) 

    }

}

module.exports = {ValidarR}