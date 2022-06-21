//Recorrer el arreglo definido en la opcion anterior y mostrar lo aplicacido aplicando 4 estructuras de repetición
//Primera estructura repetitiva usando "For"

let x = comidita.length;
function estructura0(info, valor){
    console.log("Usamos For");
    for (i = 0; i < valor; i++){
        console.log(info[i])
    }

    estructura0(comidita, x)

//Segunda estructura repetitiva usando "forEach"

}
function estructura1(datos){
    console.log("Usamos forEach");
    datos.forEach(comidita => {
        console.log("Nombre: %s, Tipo: %s, Ingredientes : %s", comidita.Nombre, comidita.Tipo, comidita.Ingrediente);
    });
}
estructura1(comidita, x);

//Tercera estructura repetitiva usando "While"

function estructura2(info, valor) {
    console.log("Usamos While");
    let i = 0;
    while (i < valor){
        console.log(info[i])
        i++;
    }
}
estructura2(comidita, x);

//Cuarta estructura repetitiva usando "Do while"

function estructura3(info, valor) {
    console.log("Usamos Do while");
    let i = 0;
    do {
        console.log(info[i])
        i++;
    }
    while (i < valor);
}
estructura3(comidita, x);


