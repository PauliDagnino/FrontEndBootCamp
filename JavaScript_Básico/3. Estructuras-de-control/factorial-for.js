/*
- factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for
*/

factorial=1;
num=10;

for (var i=num; i>0; i=i-1){
    factorial=i*factorial;
    console.log(factorial)
}

console.log(factorial)
