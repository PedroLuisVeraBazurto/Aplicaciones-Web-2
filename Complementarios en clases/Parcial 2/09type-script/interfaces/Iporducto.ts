//Controlar el Body, esto es como un contrato que nos dice los rewuisitos minimos que se debe de cumcplir
export 
interface IProducto {
nombre : string;
estado : boolean;
precio : number;
costo : number;
minimo : number;
stock? : number;
}