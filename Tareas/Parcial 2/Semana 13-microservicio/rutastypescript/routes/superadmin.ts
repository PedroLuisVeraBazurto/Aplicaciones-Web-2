import {Router} from 'express'
import {check} from 'express-validator'
import {Superadmin} from '../controller'
const {Crearsuperadmin} = Superadmin
import {validarCampo, validarContraseña, validacionNombre} from '../middlewares'
//import {} from '../middlewares'
class SuperAdminc {
    router : Router;
    constructor (){
        //se declara luego
        this.router = Router ();
        this.routes();
    }
    //Va primero
    routes (){
        this.router.post('/',Crearsuperadmin);
    }
}
    //crear nueva variable y validar
    const superA = new SuperAdminc();
    superA.routes();
    export default superA.router;

