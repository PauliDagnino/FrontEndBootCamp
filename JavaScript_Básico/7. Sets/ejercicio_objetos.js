/*
Crea un archivo llamado objetos.js que contenga las siguientes líneas

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
*/

let datos={ nombre: "Paulina", apellido: "Dagnino", edad:27, altura:1.73, eresDesarrollador:true};
console.log(datos);

var edad=datos["edad"];
console.log(edad);

let datos2={ nombre: "Pepe", apellido: "Tete", edad:24, altura:1.63, eresDesarrollador:false};
console.log(datos2);

var datosTodos=[];
datosTodos.push(datos)
datosTodos.push(datos2)
console.log(datosTodos)


let datosOrdenados= datosTodos.sort((a,b)=>b.edad-a.edad)
console.log(datosOrdenados)


