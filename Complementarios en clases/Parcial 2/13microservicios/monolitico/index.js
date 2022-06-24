//npm init --y
//npm i express

const servidor = require('./src/app');

servidor.listen(process.env.PORT || 3000, ()=>{
    console.log(`Servidor monolitico funconando en puerto ${process.env.PORT || 3000}`);
})
