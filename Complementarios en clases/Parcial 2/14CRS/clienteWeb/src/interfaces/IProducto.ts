// Generated by https://quicktype.io

export interface Total {
    total:     number;
    productos: Producto[];
}

export interface Producto {
    id?:    string;
    nombre: string;
    estado: boolean;
    precio: number;
    costo:  number;
    minimo: number;
    stock:  number;
    v?:     number;
    _id?:   string;
    _v?:    number;
}
