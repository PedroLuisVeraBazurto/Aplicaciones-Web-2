/* Crear una función flecha que reciba un arreglo de comidas 
y lo devuelva en mayusculas y mejoras en su formato de presentación */

Array.prototype.toUpperCase = function(){
    return this.map(world => world.toUpperCase())
};
const comida = ['Arroz colorado','ensalada','chuzo','parrilada','salchipapa'].toUpperCase();
for (const comidita of comida){
console.log(comidita);
}
