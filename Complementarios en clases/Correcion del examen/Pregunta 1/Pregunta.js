const notasAlumnos=[
    {nota1:2,nota2:4,asignatura:{nombre:"Aplicaciones web 2"},alumno:{nombre:"Miguel C."}},
    {nota1:3,nota2:2,asignatura:{nombre:"Aplicaciones web 2"},alumno:{nombre:"Pedro S."}},
    {nota1:5,nota2:2,asignatura:{nombre:"Estructura de datos"},alumno:{nombre:"Juan P."}},
]
const principal =  (notasAlumnos) => {
 let arreglo=[];
for(i=0;i<notasAlumnos.length;i++){
   const dato= notasAlumnos[i].asignatura.nombre
if(dato=="Aplicaciones web 2"){
    var nota=notasAlumnos[i].nota1;
    
    var nota2= nota=notasAlumnos[i].nota2;
    
    var suma=(notasAlumnos[i].nota1+notasAlumnos[i].nota2);
   
    if(suma<8){
arreglo.push(notasAlumnos[i].alumno.nombre);

}    

console.log(arreglo)
}

}
return arreglo;
  };
 const data=  principal(notasAlumnos);
 console.log(data)