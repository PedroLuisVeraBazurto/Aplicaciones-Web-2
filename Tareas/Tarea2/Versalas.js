var msg = require ('./datos'); // Se lo utiliza para exportar los datos del otro archivo.
 
function buscarLocalPorId(id) // Función para buscar las locales por id.
{
    const local = msg.locales.find((local)=> local.id===id);
    if(!local){ // Se lo utiliza para ejecutar otra sentencia
        const error = new Error();
        error.message = `El local con id ${id} no pudo ser encontrado`;// Mensaje de error que presenta al no encontrar una id que este en el arreglo locales.
        throw error; // Lanza exepción del usuario.
    }
    return local; // Finaliza la ejecución y devuelve un valor especifico a quien llama la función. 
}
function buscarSalaPorId(id) // Función para buscar las salas por id.
{
    const sala = msg.salas.find((sala)=> sala.id===id);
    if(!sala){ // Se lo utiliza para ejecutar otra sentencia
        const error = new Error();
        error.message = `La sala con id ${id} no pudo ser encontrado`;// Mensaje de error que presenta al no encontrar una id que este en el arreglo salas.
        throw error; // Lanza exepción del usuario.
    }
    return sala; // Finaliza la ejecución y devuelve un valor especifico a quien llama la función.
}

(async function main(){ // creamos funcion async/await.
    try{// Lo utilizamos para crear un bloque de instrucciones a intentar.
        const sala = await buscarSalaPorId(1); //utilizamos el await para que se complete una solicitud antes de que pase a la siguiente.
        const local = await buscarLocalPorId(sala.empresa);
        sala.empresa=local;
     
        console.log(sala); // Imprime la solicitud
    }catch(error){// Lo utilizamos para producir una excepción.
        console.log(error.message) // Se utiliza para imprimir los mensajes de error.
    }
    
})(); //Fin.