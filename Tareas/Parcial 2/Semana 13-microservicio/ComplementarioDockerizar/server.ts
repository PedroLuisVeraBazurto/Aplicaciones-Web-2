// //Se crea una clase Server con su contructor difiniendo las funciones y exportando la clase
import express,{Router, Express } from 'express'
 import cors from 'cors';

import { router as administradores } from './routes/Administrador'
import { dbConnection } from './database/config'

class Server
{
    app: Router;
    router: Router;
    port: Number;
    paths: { [key:string]:string };
    private _express: Express;
//  //Asignaremos en el constructor
    constructor(){
        this.app = Router();
        this.router = Router();
        this.port= Number( process.env["PORT"])
        this.paths= {
            administradores:'/api/administradores',
            
        }

//     //Defininr los metodos
        this.conectarDb();
        this.middlewares();
        this.routes();
        this.router.use('/v1/salaevento', this.app);
        this._express=  express().use(this.router);
    }
    private async conectarDb(){
        await dbConnection();
    }
    private middlewares(){
        this.app.use(cors());
        this.app.use(express.json())
    }
    private routes(){
        this.app.use(this.paths.administradores , administradores )
    }
    listen(){
        this._express.listen(this.port, ()=>{
            console.log(`Servidor ejecutando 
            en http://localhost:${this.port}/v1/sextoa/api/administradores`);
        })
    }

}

export {Server}