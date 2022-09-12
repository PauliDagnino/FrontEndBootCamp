/*

Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)


*/

nam= "Paulina";
age=27;
developer=true;
age= new Date("november 24 1994");
const book={
    title:"La vida secreta de la mente",
    author:"Mariano Sigman",
    date:new Date("march 17 2016"),
    url:"https://www.amazon.es/s?k=la+vida+secreta+de+la+mente+libro&adgrpid=114647445750&gclid=CjwKCAjwsfuYBhAZEiwA5a6CDLBkiFvGmioMD9MobL3COFtdUngYXKoIGKXJZlKCUHPqnLB4owTkAhoCfOwQAvD_BwE&hvadid=601342437811&hvdev=c&hvlocphy=1005424&hvnetw=g&hvqmt=e&hvrand=17519165264111873759&hvtargid=kwd-358258599562&hydadcr=20159_2235106&tag=hydes-21&ref=pd_sl_3ef8qv8xd1_e",
};

const lista=[nam, age, developer, age, book];

console.log(lista);
