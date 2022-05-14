// exportamos los arreglos a traves de la funcion require que se encuentra en el archivo datos.js 
var msg = require('./datos');
//Creamos una funcion asincronica para poder buscar a el usuario que se nos es ingresado por el 
//inicializador de la funcion , lo que realiza es buscar a traves del id del usuario 
//si no lo encuentra manda una sentencia error
async function buscarusuario(id){
    //importamos los arrgelos y usamos la funcion find para realizar la busqueda con la ingresado
    //que le pasamos  en el iniciador 
    const usuario1= msg.usuario.find((usuarios)=>usuarios.id==id); 
    // revisamos si no se encuentra el usuario y si no inicializamos uan constante de error
    //y mandamos el mensaje  de error con el id correspondiente 
    if(!usuario1){
        const error= new Error();
        error.message=`El usuario con el id ${id} no pudo ser encontrado.`;
        throw error;
    }
    //  Eliminamos la contraseña por cuestion de seguridad
    delete usuario1.contraseña;
    //retornamos el arreglo que encontramos
    return usuario1;

  }
  
  //Creamos la funcion  asincronica para poder buscar a el tipo de usuario que peretenece el usuario 
  //que estamos buscando 
  async function buscartipo(id){
    //buscamos si se encuentra  primeros exportamos el arreglo tipo_usuario, y con esto usamos la funcion find
    //y lo guardamos  en una constante "tipo"
    const tipo= msg.tipo_usuario.find((tipos)=>tipos.id==id); 
    //Preguntamos si se  esta vacio el retorno
    if(!tipo){
        //creamos la constante error
        const error= new Error();
        //creamos el mensaje que va mostrar el error
        error.message=`El tipo de usuario con id ${id} no pudo ser encontrado.`;
        throw error;
    }
    //Si no hubo inconvenientes mnada el arreglo del tipo
    return tipo;

  }
 //Creamos la funcion  asincronica para poder buscar a el local si es q peretenecea uno el usuuario 
  //que estamos buscando 
  async function buscarLocal(id){
      //creamos una constante que va a almacenar el arreglo de la busqueda, exportamos el arreglo y con la funcion
      // find() buscamos a traves del id que nos retorno de el arreglo usuario
      const locals=msg.locales.find((locales)=>locales.id===id);
      //Verificamos que exista  y si no mandamos Error
      if(!locals){
          //creamos el error
          const error= new Error();
          error.message=`El local  con id ${id} no pudo ser encontrado.`;
          throw error;
      }
      delete locals.id;
      return locals;
  }
//  creamos funcion async/await. que usa al main del archivo
  async function main (){
 // Lo utilizamos para crear un bloque de instrucciones a intentar.
    try{
//utilizamos el await para que se complete una solicitud antes de que pase a la siguiente
const user =await buscarusuario(2);
//buscamos el tipo de usuario con el id que nos retorna la solicitud
const tipos= await buscartipo(user.tipo);
//Buscamos si es administrador de algun negocio
const restaurantes= await buscarLocal(user.empresa);
//guardamos en un solo arreglo
user.empresa=restaurantes;
//guardamos el tipo de usuario eel arreglo usuario
user.tipo=tipos;
//guardamos el tipo de usuario el arreglo usuario
delete user.empresas;
//mostramos el arreglo completo del usuario
    console.log(user)
    //caso de que sea error envimao el erro al catch
    }catch(error){
//Mostramos el mensaje de error correspondiente
console.log(error.message)
    }

}
//inicializamos el main del archivo
  main();