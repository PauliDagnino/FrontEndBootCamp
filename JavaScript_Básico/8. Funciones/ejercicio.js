/*
Crea un archivo JS que contenga las siguientes líneas

- Una función sin parámetros que devuelva siempre "true"
*/

function noParams(){
    return "true"
}
var s=noParams()
console.log(s)

//SetTimeout ejecuta un fragmento de codigo luego transcurrido un tiempo en ms 
//setTimeout(function(){
//    console.log("Hola Mundo");
//},2000)


/*
- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
*/

const funcionAsincrona=new Promise((resolve,reject)=>{
    setTimeout(resolve,5000)
})

funcionAsincrona
    .then(()=>console.log("Hola soy una Promesa"))
    .catch(()=>console.log("Promesa Error"))
    //.finally(()=>console.log("Promesa ejecutando"))



/*
- Una función generadora de índices pares automáticos
*/


function* generatePairId(){
    let id=0;
    while(true){
        id=id+2
        yield id 
    }
}

const gen=generatePairId();
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
//console.log(gen.next().value)
