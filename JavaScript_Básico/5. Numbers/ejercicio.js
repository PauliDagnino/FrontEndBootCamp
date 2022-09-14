/*
Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga tu altura en centímetros (entero)

- Una variable que contenga tu altura en metros (número de coma flotante)

- Una variable que contenga tu peso en kilogramos (número de coma flotante)

- Una variable que contenga tu altura en metros redondeada hacia arriba

- Una variable que contenga tu peso en kilogramos redondeado hacia abajo

- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
*/

let alturacm=173;
console.log(typeof alturacm)

let alturamts=1.73;
console.log(typeof alturamts)

let pesokgs=53;
console.log(typeof pesokgs)

alturamts_redondeoA=Math.ceil(alturamts);
console.log(alturamts_redondeoA);

alturamts_redondeoB=Math.floor(alturamts);
console.log(alturamts_redondeoB);

let max_valor_JS=Number.MAX_VALUE;
let bool=max_valor_JS+1==max_valor_JS
console.log(bool);
