const mongoose = require ('mongoose');
const conexion="mongodb+srv://Pedro:PedroV2001@cluster0.8mwgh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

(async ()=>{
 const estadoConectado=await mongoose.connect(conexion)
 const Grupo=mongoose.model("Grupo",{nombre:String});
 const Permiso=mongoose.model("Permiso",{nombre:String});
const Usuario=mongoose.model("Usuario",
{
    nombre:String,
    idGrupo:{type:mongoose.Types.ObjectId,ref:"Grupo" },
   // permisos:[{type:mongoose.Types.ObjectId,ref:"Permiso"}],
   permisos:[
      { permiso:{type:mongoose.Types.ObjectId,ref:"Permiso"},
       estado:{type:Boolean}
    }
   ]
});
const grupo1= new Grupo({nombre:"Administradores"});

//asegurarnos que el grupo se guardo 
const guardarGrupo=await grupo1.save();
//asegurarnos que el permiso se guardo 

const Permisos1=new Permiso({nombre:"Grabar"});
const Grabarpermiso=await Permisos1.save();
const Permisos2=new Permiso({nombre:"Eliminar"});
const Eliminarpermiso=await Permisos2.save();
const usuario1=new Usuario({nombre:"Prueba Sexto A Reyes Macias",
 idGrupo: guardarGrupo._id,
 permisos:[
     {permiso:Grabarpermiso._id, estado:true},
     {permiso:Eliminarpermiso._id, estado:true},
 ]
})

const guardado=await usuario1.save();
const resultado=await Usuario.find().populate("idGrupo")
.populate("permisos.permiso")
console.log(resultado);
})();


//npm init --y
// npm i mongoose