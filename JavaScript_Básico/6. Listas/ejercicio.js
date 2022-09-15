/*
- Una variable que contenga la lista de la compra (mínimo 5 elementos)

- Modifica la lista de la compra y añádele "Aceite de Girasol"

- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
*/


compra=["bananas","manzanas", "avocado", "mango", "zumo"];
console.log(compra);

compra.push("aceite de girasol");
console.log(compra);

//compra.pop()
index=0;
for (let i = 0; i < compra.length; i++) {
    if (compra[i] == 'aceite de girasol') {
        index = i;
    }
}
compra.splice(5,1);
console.log(compra);


/*
- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

*/

const listaPeliculas=[
    {titulo:"El resplandor", director:"Stanley Kubrick", fecha:1980},
    {nombre:"Slumdog Millionaire", director:"Danny Boyle",fecha:2008},
    {nombre:"A Quiet Place", director:"John Krasinski",fecha:2018}
];
console.log(listaPeliculas);

const listaPeliculas2=listaPeliculas.filter(obj=>obj.fecha>2010);
console.log(listaPeliculas2);

const listaDirectores=listaPeliculas.map((valor, indice) => valor.director);
console.log(listaDirectores);

const listaTitulos=listaPeliculas.map((valor, indice) => valor.nombre);
console.log(listaDirectores);

const listaPeliculas3= listaDirectores.concat(listaTitulos);
console.log(listaPeliculas3);

const listaPeliculas4= [...listaDirectores , ...listaTitulos];
console.log(listaPeliculas4);