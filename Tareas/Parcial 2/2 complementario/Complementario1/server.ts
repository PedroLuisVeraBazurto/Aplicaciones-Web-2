import express from 'express'
import {Router} from 'express'
import cors from 'cors'
import {Application} from 'express'
import dbConnection from './database/config'
import clienteRoutes from './routes/Reservas'

 class Server{
    private app: Application;
    router: Router;
     private _express: any;
     private paths: any;  
     private port: any;  
    //nota_routes = require('./routes/Product');
    constructor(){
       
        this.app = express();
       this.router=Router();
       this.port = process.env.PORT;
       this.paths= {
        cliente:
        '/api/reserva',//definimos la ruta que tomara para cliente en el server
        }
        this.middlewares();
        this.routes();
        this.conectarBD();
        this.router.use('/v1/salaevento', this.app);
        this._express=  express().use(this.router);
        
        
    }
  
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        
        
    }
    async conectarBD(){
        await dbConnection();
    }
    routes(){// Rutas donde importortamos los símbolos de modulos al hambito actual.
        this.app.use(this.paths.cliente,clienteRoutes);
        
    

    }
     listen(){
        this._express.listen(this.port, ()=>{// Iniciar el servidor para escuchar la conexión cifrada.
            console.log(`Servidor corriendo en puerto ${this.port}`);
        })
    }
    

}

export{Server}