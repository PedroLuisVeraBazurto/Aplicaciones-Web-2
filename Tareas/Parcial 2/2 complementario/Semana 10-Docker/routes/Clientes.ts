import {Router} from 'express'
import{check}from 'express-validator'
import{Producto} from '../controllers'
const {Obtener_productos}=Producto
import{validarCampo,validacionNombre,validarContraseña}  from '../middlewares'
class ClienteRoutes{
    router: Router;
    constructor(){
        this.router=Router();
        this.routes();
    }
    routes(){
        this.router.post('/',validacionNombre,validarContraseña,Obtener_productos);
    }

}
const clienteRoutes=new ClienteRoutes();

clienteRoutes.routes();
export default clienteRoutes.router;