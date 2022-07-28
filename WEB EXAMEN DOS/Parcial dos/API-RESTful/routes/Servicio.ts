import {Router} from 'express'
import{check}from 'express-validator'
import{Producto} from '../controllers'
const {Obtener_productos,Obtener_servicio,obtener_id,actualizo,eliminarre}=Producto
class ServicioRoutes{
    router: Router;
    constructor(){
        this.router=Router();
        this.routes();
    
    }
    routes(){
        this.router.post('/',Obtener_productos);
        this.router.get('/',Obtener_servicio);
        this.router.put('/:id',actualizo);
        this.router.get('/:id',obtener_id);
        this.router.delete('/:id',eliminarre);
    }
}
const clienteRoutes=new ServicioRoutes();

clienteRoutes.routes();
export default clienteRoutes.router;
