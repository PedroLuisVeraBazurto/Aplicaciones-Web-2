//USAMOS LA LIBRERIA MONGOOSE
const mongoose = require ('mongoose');
//REALIZAMOS LA CONEXIÓN MEDIANTE UN CÓDIGO QUE NOS BRINDA ATLAS PARA CONECTAR APP
const conexion="mongodb+srv://Pedro:PedroV2001@cluster0.8mwgh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//funcion async para el ingreso y manejo de los datos
(async ()=>{
    //Nos permite iniciar la conexión
const estadoConectado=await mongoose.connect(conexion)
const Cliente=mongoose.model("Cliente",
{
    //Agregamos las variables para cliente
    NOMBRE:String, UsER:String,Telefono:String,email:String,Contraseña:String,
  
});
//Agregamos las variables para administrador
const Administrador=mongoose.model("Administrador",
{
    NOMBRE:String, UsER:String,Telefono:String,email:String,Contraseña:String,
});
//Agregamos las variables para super administrador
const SuperAdmin=mongoose.model("SuperAdmin",
{
    NOMBRE:String, UsER:String,email:String,Contraseña:String,
});
const Local=mongoose.model("Local",
{
    NOMBRE:String, UsER:String,direccion:String,email:String, 
    idUsuario:{type:mongoose.Types.ObjectId,ref:"Administrador" },
});

const Tipo_sala=mongoose.model("Tipo_sala",
{
    NOMBRE:String,descripcion:String,
});
const Sala=mongoose.model("Sala",
{
    capacidad:Number,idlocal:{type:mongoose.Types.ObjectId,ref:"Local" },idTipo:{type:mongoose.Types.ObjectId,ref:"Tipo_sala" },
});
const Reservaciones=mongoose.model("Reservaciones",
{
    precio:Number, fecha:String,Hora:String,idUsuario:{type:mongoose.Types.ObjectId,ref:"Cliente" },idSala:{type:mongoose.Types.ObjectId,ref:"Sala" },
  
});
//A partir de aqui empezamos a rellenar datos 
const Cons_cliente=new Cliente({
 nombre:"Pedro Luis Vera Bazurto",
 Usuario:"Pedro Vera",
 Celular:"0988079659",
 Correo:"pvera9323@gmail.com",
 Contraseña:"PedroV2001"
})

const guardado=await Cons_cliente.save();

const Cons_Admin=new Administrador({
 NOMBRE:"Maria Vera",
 Usuario:"Maria",
 Celular:"0944315978",
 Correo:"ddhbdsjsj@gmail.com",
 Contraseña:"Maria12345"
})
const guarda_ADMIN=await Cons_Admin.save();

const Cons_Super=new SuperAdmin({
nombre:"Luis",
 Usuario:"Aluis",
 Correo:"luis@gmail.com",
 Contraseña:"Luis2001"
})
const guarda_Super=await Cons_Super.save();

const Cons_Local=new Local({nombre:"Jorge",
direccion:"calle 3  Manta",
 Celular:"0931557893",
 Correo:"jorge@gmail.com",
 idUsuario:Cons_Admin._id,
})
const guarda_local=await Cons_Local.save();

const Cons_Tipo=new Tipo_sala({
nombre:"Cumpleaño feliz",
descripcion:"Fiesta feloces Manta",
})
const guarda_TipoSala=await Cons_Tipo.save();

const Cons_Sala=new Sala({
    capacidad:100, 
    idlocal:Cons_Local._id,
    idTipo:Cons_Tipo._id,
    })
const guarda_Sala=await Cons_Sala.save();

const Cons_reserva=new Reservaciones({
nombre:"GRAN FIESTA",
precio:800,
fecha:"22-05-2022", 
Hora:"7:10",
idUsuario:Cons_cliente._id,
idSala:Cons_Sala._id,
})
const guardar=await Cons_reserva.save();
const resultado=await Reservaciones.find()
console.log(resultado);
})();
//npm init --y
// npm i mongoose