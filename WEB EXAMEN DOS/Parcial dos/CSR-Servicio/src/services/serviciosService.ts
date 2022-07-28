import axios from 'axios';
import {Servicio} from '../interfaces/IServicio'

export const _http = axios.create({
    baseURL: 'http://localhost:2500/v1/servicio/api'
})

export const postServicio = async (url:string, data: Servicio) => {
    return await _http.post(url, data)
}
export const getServicio = async (url:string) => {
    return await _http.get(url)
}
export const putServicio = async (url:string, data: Servicio) => {
    return await _http.put(url, data)
}
export const deleteServicio = async (url:string) => {
    return await _http.delete(url)
}

export const errorAxios = (error: Error) => {
    if(axios.isAxiosError(error)){
        console.log('Error en el servidor');
    }
}