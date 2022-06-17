import express,{ Router } from "express";
import cors from 'cors'

import {dbConnection} from './database/config'
import {router as producto} from './routes/Producto'
class Server{
    app: Router;
    router:Router;
    private _express:  express.Express;
    port:Number;
    paths:{[key:string]:string}
    constructor(){
        this.app=Router();
        this.router=Router();
        this.port=Number(process.env["PORT"])
        this.paths={
            productos:"/api/productos",
            clientes:"/api/cliente",
            

        }
        
        this.dbConnection();
        this.routes();
        this.router.use('/v1/sextoa', this.app);
        this._express=  express().use(this.router);
    }
     async dbConnection(){
         await dbConnection();
     }
     middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
     }
    routes(){
        this.app.use(this.paths.productos
            ,producto);
    }
     listen(){
        this._express.listen(this.port, ()=>{// Iniciar el servidor para escuchar la conexión cifrada.
            console.log(`Servidor corriendo en  http://localhost:${this.port}/v1/sextoa/api/productos`);
        })
     }

}
export{Server}