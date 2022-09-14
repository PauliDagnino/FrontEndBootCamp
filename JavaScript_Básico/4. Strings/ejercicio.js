/*
Crea un archivo JS que contenga las siguientes líneas
- Una cadena de texto con tu Nombre
- Otra cadena de texto con tu Apellido
- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
- Una variable que contenga la primera letra del Nombre
- Otra variable que contenga la última letra del Apellido
- Una cadena de texto que elimine los espacios de la variable "estudiante"
- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
*/

let nombre="Paulina";
console.log(nombre);

let apellido="Dagnino";
console.log(apellido);

estudiante=nombre.concat(" ", apellido);
console.log(estudiante);

estudianteMayus=estudiante.toUpperCase();
console.log(estudianteMayus)

estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

numLetras=estudiante.length
console.log(numLetras)

var primera=estudiante.slice(0,1);
console.log(primera)

var ultima=estudiante.slice(numLetras-1,numLetras);
console.log(ultima)


index_space=estudiante.indexOf(" ")
estudiante_nospace=estudiante.slice(0,index_space)+estudiante.slice(index_space+1,numLetras)
console.log(estudiante_nospace)

Nombre="Paulina"
bool=estudiante.includes(Nombre)
console.log(bool)







