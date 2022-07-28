export interface IResServicio {
    total: number;
    servicios: Servicio[];
}
export interface Servicio {
    id?:string,
    nombre:string,
    precio:number,
}
