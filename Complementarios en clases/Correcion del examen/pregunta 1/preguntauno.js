/*FUNCION FLECHA QUE RECIBA EL ARREGLO DE OBJETOS Y DEVUELVA EN UN ARREGLO DE CADENAS LOS NOMBRES DE LOS ESTUDIANTES QUE PERDIERON LA ASIGNATURA APLICACIONES WEB II
 CUANDO LA SUMA DE LAS DOS NOTAS ES MENOR DE 8.*/
const NotasA = [
  {
    nota1: 2,
    nota2: 4,
    asignatura: { nombre: "Aplicaciones web II" },
    alumno: { nombre: "Pedro Vera." },
  },
  {
    nota1: 3,
    nota2: 2,
    asignatura: { nombre: "Aplicaciones web II" },
    alumno: { nombre: "Luis Miguel." },
  },
  {
    nota1: 5,
    nota2: 2,
    asignatura: { nombre: "Aplicaciones web II" },
    alumno: { nombre: "Patricio Estrella." },
},
];
const principal = (NotasA) => {
  let array = [];
  for (i = 0; i < NotasA.length; i++) {
    const datos = NotasA[i].asignatura.nombre;
    if (datos == "Aplicaciones web II") {
      var nota1 = NotasA[i].nota1;
      var nota2 = (nota1 = NotasA[i].nota2);
      var resultado = NotasA[i].nota1 + NotasA[i].nota2;
      if (resultado < 8) {
        array.push(NotasA[i].alumno.nombre);
      }
      console.log(array);
    }
  }
  return array;
};
const dato = principal(NotasA);
console.log(dato);
