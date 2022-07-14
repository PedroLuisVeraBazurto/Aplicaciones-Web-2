import './style.css'
import {httpAxios} from './server'
import axios from 'axios';
import {SUPER} from './Interfaces/superA'




const app = document.querySelector<HTMLDivElement>('#app')!
let _id: string | undefined = ''
const actualizar_table= async()=>{
  const respproductos = await (await httpAxios.get('Superadministrador')).data
  console.log(respproductos);

  
  const tabla = document.createElement('table');
  tabla.id="tabla"
  tabla.border="1"

  for(const producto of respproductos){
    const row = tabla.insertRow();
    const celda = row.insertCell();
    celda.innerHTML=`<button class="boton" value='${producto._id}'>${producto.Nombre}</button>`;
    const celda2 = row.insertCell();
    celda2.innerHTML=`${producto.Correo}`
    const celda3 = row.insertCell();
    celda3.innerHTML=`${producto.Contrasena}`
  }
  cuerpo.innerHTML=""
  cuerpo.appendChild(tabla)

 document.querySelectorAll('.boton').forEach((ele:Element)=>{
    ele.addEventListener('click',async ()=>{
     // httpAxios.get(`productos/62ba6c56f37a5cffcfc5ddb`)
     console.log((ele as HTMLButtonElement).value)
     const {data}= await  httpAxios.get<SUPER>(`Superadministrador/${(ele as HTMLButtonElement).value}`);
     console.log({data})
     nombre.value=data.Nombre;
     usuario.value=data.Usuario;
     contrasena.value=data.Contrasena;
     correo.value=data.Correo;
     celular.value=data.Celular;
   _id=data._id

    })
  })
}


app.innerHTML +=`
<div >
<h1>Registre superadmin</h1>
<label for='nombre' >Nombre</label><input id='nombre'/>
<label for='usuario' >Usuario</label><input id='usuario'/>
<label for='correo' >Correo</label><input id='correo'/>
<label for='celular' >Celular</label><input id='celular'/>
<label for='contrasena' >Contraseña</label><input id='contrasena'/>

<p>
		<ul id="errores"></ul>
	</p>
<button id="nuevo">Nuevo</button>
<button id="grabar">Grabar</button>


<div id="cuerpo">${actualizar_table()}</div>
</div>

<div>
<h1>Ingreso de Superadmin</h1>
<label for='nombres' >Usuario</label><input id='nombres'/>
<label for='contrasenas' >Contraseña</label><input id='contrasenas'/>
<button id="iniciar">Buscar</button>
</div>
<div id="actualizar"></div>

`


const nombre= document.querySelector<HTMLInputElement>('#nombre')!;
const usuario= document.querySelector<HTMLInputElement>('#usuario')!;
const correo= document.querySelector<HTMLInputElement>('#correo')!;
const celular= document.querySelector<HTMLInputElement>('#celular')!;
const contrasena= document.querySelector<HTMLInputElement>('#contrasena')!;
const nombres= document.querySelector<HTMLInputElement>('#nombres')!;
const contrasenas= document.querySelector<HTMLInputElement>('#contrasenas')!;
let erroresUl:HTMLUListElement = document.querySelector('#errores')!
const nuevo = document.querySelector<HTMLButtonElement>("#nuevo")!
const gravar = document.querySelector<HTMLButtonElement>("#grabar")!

const iniciar = document.querySelector<HTMLButtonElement>("#iniciar")!

const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!

const actualizar = document.querySelector<HTMLDivElement>('#actualizar')!
function imprimirErrores(errores: string[]): void {
  // Limpiamos los errores anteriores en HTML
  erroresUl.textContent = '' 
  // Generamos todos LI con su mensaje
  errores.forEach(function(mensaje) {
      // Creamos nuevo LI
      let nuevoLi = document.createElement('li')
      nuevoLi.textContent = mensaje
      // Lo añadimos dentro de nuestro UL
      erroresUl.appendChild(nuevoLi)
  })
}
function enviarFormulario(): void {

  // Variables
  let errores: string[] = []
  let regexpNumber: RegExp = /^[+ 0-9]{10}$/;
  let coreo_ex: RegExp = /\S+@\S+\.\S+/;
  // Validamos nombre
  //// ¿Es un numero?
  if (nombre.value.length<5) errores.push('El nombre no puede ser un menor que 5')
  //// Es obligatorio
  console.log(regexpNumber.test(celular.value));
  if (nombre.value === '') errores.push('El nombre es obligatorio')
  console.log(correo.value)
  if (!regexpNumber.test(celular.value)) errores.push('Formato del celular no valido')
  if (!coreo_ex.test(correo.value)) errores.push('Formato del correo no valido')
  if (contrasena.value==='') errores.push('La contraseña no puede estar vacio')
  if (contrasena.value.length<5) errores.push('La contraseña no puede ser  menor de 5')
  // Mostramos los errores
  imprimirErrores(errores)
console.log(errores.length)
  // Enviamos formulario
  if (errores.length === 0) {
    grabar(_id)
  }
}

nuevo.addEventListener('click',()=>{

  nombre.value=""
  usuario.value=""
  correo.value=""
  celular.value=""
  contrasena.value=""

})



iniciar.addEventListener('click',async()=>{

const enviar=inicio();
console.log(enviar)
const data=await(await httpAxios.get('Superadministrador/sesion',{
  params: {
    Usuario: enviar.Usuario,
    Contrasena: enviar.Contrasena,
  }
})).data

console.log(data.length)
if(data.length==1){
  alert("Inicio sesión correctamente");
  cambio(data)
}else{
  alert("Credeneciales no correctas");
  actualizar.innerHTML =`
 
  `
  
}

})


const cambio=(datas:any)=>{
  actualizar.innerHTML +=`
<div >
<h1>Cambio de contraseña</h1>
<label for='contra' >Contraseña</label><input id='contra'/>
<button id="actuliza_contra">Cambio</button>
<button id="elimina">Eliminar cuenta</button>
</div>
`
const contra= document.querySelector<HTMLInputElement>('#contra')!;
const actuliza_contra = document.querySelector<HTMLButtonElement>("#actuliza_contra")!
const elimina = document.querySelector<HTMLButtonElement>("#elimina")!

actuliza_contra.addEventListener('click',async ()=>{
console.log(datas)
console.log(contra.value)
console.log(datas[0]._id)
const cambiar={
  _id: datas[0]._id,
  Contrasena: contra.value,
}
  const data=await(await httpAxios.put('Superadministrador/cambio',cambiar)).data
alert(data)
actualizar_table();
})

elimina.addEventListener('click',async ()=>{
  console.log(datas)
  console.log(contra.value)
  console.log(datas[0]._id)
  const cambiar={
    _id: datas[0]._id,
    Estado: false,
  }
    const data=await(await httpAxios.put('Superadministrador/eliminar',cambiar)).data
  alert(data)
  actualizar_table();
  })
}

const inicio=()=>{
  const buscar={
    Usuario: nombres.value,
    Contrasena: contrasenas.value,
   
  }
 
  return buscar;
}

const funcion_grabar=()=>{
  const grabar:SUPER={
    Nombre: nombre.value,
    Usuario: usuario.value,
    Correo :correo.value,
    Contrasena:contrasena.value,
    Celular: celular.value,
  }
 return grabar;
}

const grabar=async(_id:any)=>{
  const enviar=funcion_grabar();
 
  console.log(_id)
  if(_id.trim().length>0){
    const respuesta:SUPER=await( await  httpAxios.put(`Superadministrador/${_id}`, enviar)).data
   alert(respuesta);
     return;
     }

  try{
    const data=await(await httpAxios.post<SUPER>('Superadministrador',enviar)).data
    alert(data)
    actualizar_table();
  }
  catch(error){
  
    if(axios.isAxiosError(error)){
      const errorMsg:any=error.response?.data 
     for (let index = 0; index < errorMsg.errors.length; index++) {
       alert( errorMsg.errors[index].msg );
      
       
     }
    }
      
    
  }

}

 gravar.addEventListener('click',async()=>{
  enviarFormulario()
}) 



