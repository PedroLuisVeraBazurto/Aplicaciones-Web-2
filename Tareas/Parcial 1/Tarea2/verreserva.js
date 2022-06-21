var msg = require('./datos'); // Se lo utiliza para exportar los datos del otro archivo.

async function buscarreserva(id){ // Función para buscar las reservas por id.
    const reservacion= msg.reserva.find((reservas)=>reservas.id==id); 
    
    if(!reservacion){ // Se lo utiliza para ejecutar otra sentencia
        const error= new Error();
        error.message=`La reserva con id ${id} no pudo ser encontrado.`; // Mensaje de error que presenta al no encontrar una id que este en el arreglo reserva.
        throw error; // Lanza exepción del usuario.
    }
    return reservacion; // Finaliza la ejecución y devuelve un valor especifico a quien llama la función.

}
  

async function buscarLocal(id){ // Función para buscar los locales por id.
    const locals=msg.salas.find((locales)=>locales.id===id);
    if(!locals){ // Se lo utiliza para ejecutar otra sentencia
        const error= new Error();
        error.message=`El local con id ${id} no pudo ser encontrado.`; // Mensaje de error que presenta al no encontrar una id que este en el arreglo locales.
        throw error; // Lanza exepción del usuario.
    }
    return locals; // Finaliza la ejecución y devuelve un valor especifico a quien llama la función.

}

async function buscarusuario(id){ // Función para buscar los usuarios por id.
    const users=msg.usuario.find((usuarios)=>usuarios.id===id);
    if(!users){ // Se lo utiliza para ejecutar otra sentencia
        const error= new Error();
        error.message=`El usuario con id ${id} no pudo ser encontrado.`; // Mensaje de error que presenta al no encontrar una id que este en el arreglo usuario.
        throw error; // Lanza exepción del usuario.
    }
    delete users.contraseña // Lo utilizamos para borrar una propiedad de un objeto.
    return users; // Finaliza la ejecución y devuelve un valor especifico a quien llama la función.
}

async function main (){ // creamos funcion async/await.
    try{ // Lo utilizamos para crear un bloque de instrucciones a intentar.
        const reserva =await buscarreserva(1); //utilizamos el await para que se complete una solicitud antes de que pase a la siguiente.
        const salon= await buscarLocal(reserva.sala); 
        const users= await buscarusuario(reserva.usuario);
        reserva.sala=salon;
        reserva.usuario=users;


        console.log(reserva) // Imprime la solicitud
    }catch(error){ // Lo utilizamos para producir una excepción.
        console.log(error.message) // Se utiliza para imprimir los mensajes de error.
    }

}

main(); //Fin