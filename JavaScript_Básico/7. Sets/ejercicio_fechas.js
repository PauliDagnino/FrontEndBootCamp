/*
Crea un archivo llamado fechas.js que contenga las siguientes líneas

- La fecha de hoy

- La fecha de tu nacimiento

- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

- Una variable que contenga el día de tu nacimiento

- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
*/

let fechaHoy= new Date();
console.log(fechaHoy);

let fechaNacimiento= new Date("November 4, 1994");
console.log(fechaNacimiento);

var bool= fechaHoy.getTime()>=fechaNacimiento.getTime();
console.log(bool);

let diaNacimiento=fechaNacimiento.getDate()
console.log(diaNacimiento)

let mesNacimiento=fechaNacimiento.getMonth()+1
console.log(mesNacimiento)

let añoNacimiento=fechaNacimiento.getFullYear()
console.log(añoNacimiento)