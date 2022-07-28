import './style.css'
import {Servicio} from './Interfaces/IServicio'
import {_http,postServicio,getServicio,putServicio,deleteServicio} from './services/serviciosService'
const app = document.querySelector<HTMLDivElement>('#app')!
let _id: string | undefined=''




app.innerHTML += `
<br><br><label for="solicitud">Numero de solicitud</label><input id="Solictud" style='margin-left:8%'></input><br><br>
  <label for="precio">Fecha</label><input id="precio"style='margin-left:8%'></input><br><br><br>
  <br><br><label for="Identificacion">Identificacion</label><input id="nombres" style='margin-left:8%'></input><br><br>
  <br><br><label for="Desde">Desde</label><input id="Desde" style='margin-left:8%'></input><br><br>
  <br><br><label for="Hasta">Hasta</label><input id="Hasta" style='margin-left:8%'></input><br><br>
  <br><br><label for="Beneficios">Beneficios</label><input id="Beneficios" style='margin-left:8%'></input><br><br>
  <button id="registrar">Registrar</button>
  <button id="editar">Editar Servicios Adicionales</button>
  <button id="consultar">Consultar</button>
  <button id="desabilitar">desabilitar</button>
  <button id="desabilitar">aceptarr</button>
  <button id="desabilitar">rechazar</button>
  <button id="limpiar">Limpiar Campos</button>
  <div id="cuerpo"></div>
</div>
`
//Configuration buttons
const grabar = document.querySelector<HTMLButtonElement>('#registrar')!;
const edit = document.querySelector<HTMLButtonElement>('#editar')!;
const consult = document.querySelector<HTMLButtonElement>('#consultar')!;
const borrar = document.querySelector<HTMLButtonElement>('#eliminar')!;
const clean = document.querySelector<HTMLButtonElement>('#limpiar')!;
// const clean = document.querySelector<HTMLButtonElement>('#limpiar')!;
// const clean = document.querySelector<HTMLButtonElement>('#limpiar')!;
// const clean = document.querySelector<HTMLButtonElement>('#limpiar')!;
// const clean = document.querySelector<HTMLButtonElement>('#limpiar')!;
//Configuration fields
const id = document.querySelector<HTMLInputElement>('#id')!;
const nombre = document.querySelector<HTMLInputElement>('#nombres')!;
const precio = document.querySelector<HTMLInputElement>('#precio')!;
const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!
//Asignación de métodos
grabar.addEventListener('click',async()=>{
  const grabar:Servicio={
    id:  id.value,
    nombre:nombre.value,
    precio:Number(precio.value),
  }
console.log(_id)
  if(_id!.trim().length>0){
    const resp=await(await putServicio(`adicionales/${_id}`,grabar)).data
    alert(resp)
   // Funcion para actualizar la tabla
     return;
     }
  const data=await(await postServicio('adicionales',grabar)).data
  alert(data)
}) 
consult.addEventListener('click',async()=>{
  funcion_grabar()
}) 

const funcion_grabar=async()=>{

  const respproductos=await(await getServicio(`adicionales`)).data
  console.log(respproductos);

  
  const tabla = document.createElement('table');
  tabla.id="tabla"
  tabla.border="1"

  for(const producto of respproductos){
    const row = tabla.insertRow();
    const celda = row.insertCell();
    celda.innerHTML=`<button class="boton" value='${producto._id}'>${producto.id}</button>`;
    const celda2 = row.insertCell();
    celda2.innerHTML=`${producto.nombre} `
    const celda3 = row.insertCell();
    celda3.innerHTML=`${producto.precio} `
  }
  cuerpo.innerHTML=""
  cuerpo.appendChild(tabla)

 document.querySelectorAll('.boton').forEach((ele:Element)=>{
    ele.addEventListener('click',async ()=>{
     // httpAxios.get(`productos/62ba6c56f37a5cffcfc5ddb`)
     console.log((ele as HTMLButtonElement).value)
     const data=await(await getServicio(`adicionales/${(ele as HTMLButtonElement).value}`)).data
     console.log(data)
     id.value=data.id
     nombre.value=data.nombre
     precio.value=data.precio
     _id=data._id

    })
  })
}
 
clean.addEventListener('click',async()=>{
  id.value=''
     nombre.value=''
     precio.value=''
 
}) 
edit.addEventListener('click',async()=>{
 console.log(_id);
 const grabar:Servicio={
  id:  id.value,
  nombre:nombre.value,
  precio:Number(precio.value),
}
 const resp=await(await putServicio(`adicionales/${_id}`,grabar)).data
 alert(resp)
 funcion_grabar()
}) 
borrar.addEventListener('click',async()=>{
  console.log(_id);
  
  const resp=await(await deleteServicio(`adicionales/${_id}`)).data
  alert(resp)
  funcion_grabar()
   
 }) 