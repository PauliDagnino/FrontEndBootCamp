/*
Crea un nuevo proyecto de Node

- Instala la dependencia Winston

- En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

- Registra el error en un archivo a través de un try...catch
*/

const logger=require('./logger')

//console.log("Hola estoy saliendo por pantalla")
//logger.info("Hola esto es un mensaje informativo")
//logger.debug("Esto es un mensaje de debug")
//logger.warn("Esto es un mensaje de advertencia")
//logger.error("Esto es un error")

const miFuncion= val=>{
    if(typeof val==="number"){
        return 2*val
    }
    logger.error("El valor debe ser de tipo número")
}

const numero="hola"

try{
    // Código que puede fallar
    console.log("Está ejecutándose de manera correcta")
    const doble=miFuncion(numero)
    console.log(doble)
} catch(e){
    // En caso de fallar, quiero que ejecutes
    console.error("ERROR!")
    console.error(e)
} finally{
    console.log("Esto se va a ejecutar tanto si se produce algun error, como si no existe ninguno")
}

