import {Router} from 'express'
import{check}from 'express-validator'
import{Producto} from '../controllers'
const {Obtener_productos,Obtener_clientes,obtener_id,buscar,cambiar_contra,eliminar_usu,cambio_total}=Producto
import{validarCampo,validacionNombre,validarContraseña}  from '../middlewares'
class ClienteRoutes{
    router: Router;
    constructor(){
        this.router=Router();
        this.routes();
    
    }
    routes(){
        this.router.post('/',validacionNombre,validarContraseña,Obtener_productos);
        this.router.get('/',Obtener_clientes);
        this.router.get('/sesion',buscar);
        this.router.put('/cambio',cambiar_contra);
        this.router.put('/:id',cambio_total);
        this.router.put('/eliminar',eliminar_usu);
        this.router.get('/:id',obtener_id);
      
         
    }
}
const clienteRoutes=new ClienteRoutes();

clienteRoutes.routes();
export default clienteRoutes.router;
