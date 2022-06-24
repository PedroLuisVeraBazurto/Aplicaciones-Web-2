import {Router} from 'express'
import {Superadmin} from '../controller'
const {Crearsuperadmin} = Superadmin
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
        this.router.get('/',Crearsuperadmin);
    }
}
//crear nueva variable y validar
    const superA = new SuperAdminc();
    superA.routes();
    export default superA.router;

