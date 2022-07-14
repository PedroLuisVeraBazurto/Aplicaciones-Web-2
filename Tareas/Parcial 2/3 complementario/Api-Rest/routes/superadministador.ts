import {Router} from 'express'
import{check}from 'express-validator'
import{Producto} from '../controllers'
const { Obtener_Spa,Obtener_Sp,obtener_id, buscaA,cambiar_contra,eliminar_admin,cambio_total}=Producto
import{validarCampo,validacionNombre,validarContraseña}  from '../middlewares'
class ClienteRoutes{
    router: Router;
    constructor(){
        this.router=Router();
        this.routes();
    
    }
    routes(){
        this.router.post('/',Obtener_Sp);
        this.router.get('/',Obtener_Spa);
        this.router.get('/sesion',buscaA);
        this.router.put('/cambio',cambiar_contra);
        this.router.put('/:id',cambio_total);
        this.router.put('/eliminar',eliminar_admin);
        this.router.get('/:id',obtener_id);
      
         
    }
}
const clienteRoutes=new ClienteRoutes();

clienteRoutes.routes();
export default clienteRoutes.router;
