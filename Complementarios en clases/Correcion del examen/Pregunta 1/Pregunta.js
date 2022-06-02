const notasAlumnos=[
    {nota1:5,nota2:2,asignatura:{nombre:"Aplicaciones web 2"},alumno:{nombre:"Pedro Vera"}},
    {nota1:4,nota2:3,asignatura:{nombre:"Aplicaciones web 2"},alumno:{nombre:"Luis Miguel"}},
    {nota1:4,nota2:5,asignatura:{nombre:"Estructura de datos"},alumno:{nombre:"Chayanne"}},
]
const principal =  (notasA) => {
 let arreglo=[];
for(i=0;i<notasAl.length;i++){
   const dato= notasA[i].asignatura.nombre
if(dato=="Aplicaciones web 2"){
    var nota=notasA[i].nota1;
    
    var nota2= nota=notasA[i].nota2;
    
    var suma=(notasA[i].nota1+notasA[i].nota2);
   
    if(suma<8){
arreglo.push(notasA[i].alumno.nombre);

}    

console.log(arreglo)
}

}
return arreglo;
  };
 const data=  principal(notasA);
 console.log(data)