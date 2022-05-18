const mongoose = require ('mongoose');
const dbConection = async ()=>{
    try {
        await mongoose.connect( process.env.MONGOO_CNN)
        console.log('Base de datos conectada...');

    } catch (error){
        console.log('No se pudo conectar a la base de datos')
        throw new Error('Error al conectarse a la base de datos');
    }
}


{
    module.exports = {
        dbConection
    }
}