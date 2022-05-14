//arreglo de los usuarios registrado en la aplicacion 

const usuario = [{
    id:1,
    nombre: 'Reyes Macias Jose Javier',
    celular: '0961553152',
    correo: 'jjrm1351828189@gmail.com',
    contraseña: 'javierrm0215',
    empresa: 1,
    tipo:1,
},

{
    id:2,
    nombre: 'Carvajal Marcillo Yandry Joel',
    celular: '0984512536',
    correo: 'yandryjoel1234@gmail.com',
    contraseña: 'yandry2020',
    empresa: 1,
    tipo:2,
},

]


// arreglo que tiene a los tipos de usuario que maneja  la apliacion
const tipo_usuario = [{
    id:1,
    nombre: 'Cliente normal',
    
},

{
    id:2,
    nombre: 'Cliente administrador',
    
},
{
    id:3,
    nombre: 'Super administrador',
    
},
]
//arreglo de los locales registrado y que imparten sus servicios en la aplicacion 
const locales = [{
    id:1,
    nombre: 'Sala de Eventos Yanira',
    telefono: '053745123',
    correo: 'eventosYanira@gmail.com',
    direccion: '27V3+69C, Manta',
},
{
    id:2,
    nombre: 'Sala De Eventos Glamour',
    telefono: '053745123',
    correo: 'eventosGlamour@gmail.com',
    direccion: 'Vía Interbarrial, Manta',
},
{
    id:3,
    nombre: 'Sala De Eventos Brisa del mar',
    telefono: '053745123',
    correo: 'eventosBrisadelmar@gmail.com',
    direccion: '27XW+X9F, Unnamed Road',
},
{
    id:4,
    nombre: 'Sala De Eventos Silver Moon',
    telefono: '053745123',
    correo: 'eventosSilverMoon@gmail.com',
    direccion: '27JV+2HX',
},
{
    id:5,
    nombre: 'Sala De Eventos Luna Dorada',
    telefono: '053745123',
    correo: 'eventosLunadorada@gmail.com',
    direccion: 'Av Flavio Reyes y 30',
},
]


//arreglo de los salas que prestan los locales  en la aplicacion 
const salas = [
    {
        id:1,
        nombre: 'Sala para Matrimonio',
        tipo:'Matrimonial',
        precio: 110,
        Número_de_invitados: 100,
        descripcion:'Una boda o casamiento es una ceremonia religiosa o civil, mediante la cual se celebra el comienzo del matrimonio.',
        empresa:1
    },
    {
        id:2,
        nombre: 'Sala para Quinceañeras',
        tipo:'Quince años',
        precio: 150,
        Número_de_invitados: 80,
        descripcion:'Se alquila sala que puedan realizar la quinceañera de su casa.',
        empresa: 2
    
    },
    {
        id:3,
        nombre: 'Sala para Graduación',
        tipo:'Grado',
        precio: 100,
        Número_de_invitados: 90,
        descripcion:'Se alquila sala que puedan festejar a los graduados ya sean de secundaria o de educación superior.',
        empresa: 2
    
    },
    {
        id:4,
        nombre: 'Sala para Baby shower',
        tipo:'Nacimiento',
        precio: 80,
        Número_de_invitados: 120,
        descripcion:'Se alquila sala que puedan festejar a los bebes recien nacidos.',
        empresa: 1
    
    },
    {
        id:5,
        nombre: 'Sala para Bautizos',
        tipo:'bautizo',
        precio: 60,
        Número_de_invitados: 50,
        descripcion:'Se alquila sala en la que se pueda festejar a los niños y niñas recien bautizados.',
        empresa: 3
    
    },

]


//arreglo con las reservas  de los usuarios

const reserva = [{
    id:1,
	usuario:1,
	sala:1
},
    {
        id:2,
	usuario:2,
	sala:2
    },

]


module.exports ={usuario,locales,reserva,salas,tipo_usuario};