//const mongoose = require ('mongoose');
//const conexion="";
/*instalar libreria  npm i mongoose = recorderis*/
(async ()=>{
 
    const estadoConectado=await mongoose.connect(conexion)
    /**/
    const Grupo = mongoose.model("Grupo",{nombre:String});
    const Permiso = mongoose.model("Permiso",{nombre,String});

    const Usuario=mongoose.model("Usuario",
    {
        nombre:String,
        idgrupo:{type: mongoose.Types.ObjectId , ref:"Grupo"},
        //idpermiso:[{type: mongoose.Types.ObjectId , ref:"Permiso"}],
        permisos:[
            {
                permiso:{type: mongoose.Schema.Types.ObjectId, ref: "Permiso"},
                estado: {type:Boolean}
            }
        ]
    }
    );
    /**/ 
    const grupo1 = new Grupo({id: "1"}, {nombre: "sala de Eventos Yanira"}, {telefono:"053745123"},
    {correo:"eventosYanira@gmail.com"},{direccion: "27V3+69C"});
    const guardoGrupo = await grupo1.save();
    const permiso1 = new Permiso ({id: "2"}, {nombre: " Sala de Eventos Glamour"}, {telefono:"053745123"},
    {correo:"eventosGlamour@gmail.com"},{direccion: "Vía Interbarrial"});
    const guardoPermis1 = await permiso1.save();
    const permiso2 = new Permiso ({id: "3"}, {nombre: "Sala de Eventos Brisa del mar"}, {telefono:"053745123"},
    {correo:"eventosBrisadelmar@gmail.com"},{direccion: "27XW+X9F, Unnamed Road"});
    const guardoPermis2 = await permiso2.save();
    const permiso3 = new Permiso ({id: "4"}, {nombre: " Sala de Eventos Silver moon"}, {telefono:"053745123"},
    {correo:"eventosGlamour@gmail.com"},{direccion: "27JV+2HX"});
    const guardoPermis3 = await permiso1.save();


    const usuario1=new Usuario(
        {
            nombre:"Prueba de conexion con mongodb",
            idgrupo: guardoGrupo_id,
            permisos:[
                {permiso:guardoPermis1,estado:true},
                {permiso:guardoPermiso2._id, estado: true}
            ]
        }
        );


    const guardado=await usuario1.save();

    const resultado=await Usuario.find()
    .populate("idgrupo")
    .populate("permisos.permiso")

    console.log(resultado[4].permisos)
})();


//npm init --y = inicializar codigo 
// npm i mongoose
/*HOLISSS <3 */

