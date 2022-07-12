import{connect}from 'mongoose'

 const dbConnection=async ()=>{
    try{
      await  connect(process.env["MONGODB_CNN"]||"")
      console.log("Base de datos sin errores a ejecutarse")
    }
    catch(errors){
        console.log(errors)
        throw new Error("Error a conectarse a la base de datos")
    }
}
export= dbConnection