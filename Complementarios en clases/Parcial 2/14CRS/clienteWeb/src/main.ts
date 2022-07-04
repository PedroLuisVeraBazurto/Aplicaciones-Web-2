import './style.css'
import axios from 'axios'
import {Total,Producto} from './interfaces/IProducto'

const httpAxios=axios.create({
  baseURL:`http://localhost:2500/v1/sextoa/api/`
})

const app = document.querySelector<HTMLDivElement>('#app')!


const etiqueta = document.createElement("label");
etiqueta.textContent=`ID`
const input =document.createElement("input");
input.id="id"
etiqueta.htmlFor="id"


app.appendChild(etiqueta);
app.appendChild(input)

/*app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`*/

app.innerHTML +=`
<label for='nombre' >Nombre</label><input id='nombre'/>
<label for='estado' >Estado</label><input id='estado'/>
<label for='precio' >Precio</label><input id='precio'/>
<label for='costo' >Costo</label><input id='costo'/>
<label for='stock' >Stock</label><input id='stock'/>
<label for='minimo' >Mínimo</label><input id='minimo'/>

<button id="nuevo">Nuevo</button>
<button id="grabar">Grabar</button>
<button id="consultar">Consultar</button>

<div id="cuerpo"/>
`

const id= document.querySelector<HTMLInputElement>('#id')!;
const nombre= document.querySelector<HTMLInputElement>('#nombre')!;
const estado= document.querySelector<HTMLInputElement>('#estado')!;
const precio= document.querySelector<HTMLInputElement>('#precio')!;
const costo= document.querySelector<HTMLInputElement>('#costo')!;
const stock= document.querySelector<HTMLInputElement>('#stock')!;
const minimo= document.querySelector<HTMLInputElement>('#minimo')!;

const nuevo = document.querySelector<HTMLButtonElement>("#nuevo")!
const gravar = document.querySelector<HTMLButtonElement>("#gravar")!
const consultar = document.querySelector<HTMLButtonElement>("#consultar")!

const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!

nuevo.addEventListener('click',()=>{
  id.value=""
  nombre.value=""
  estado.value=""
  precio.value=""
  costo.value=""
  stock.value=""
  minimo.value=""
})

consultar.addEventListener('click', async()=>{
  const respproductos:Total = await (await httpAxios.get<Total>('productos')).data
  console.log(respproductos);
  const {productos} = respproductos
  
  const tabla = document.createElement('table');
  tabla.id="tabla"
  tabla.border="1"

  for(const producto of productos){
    const row = tabla.insertRow();
    const celda = row.insertCell();
    celda.innerHTML=`<button class="boton" value='${producto._id}'>${producto.nombre}</button>`;
    const celda2 = row.insertCell();
    celda2.innerHTML=`${producto.precio}`
  }
  cuerpo.innerHTML=""
  cuerpo.appendChild(tabla)

  document.querySelectorAll('.botton').forEach((ele:Element)=>{
    (ele as HTMLButtonElement).addEventListener('click',()=>{
      httpAxios.get(`productos/62ba6c56f37a5cffcfc5ddb`)
    })
  })
})


gravar.addEventListener('click',()=>{

})
