/*
- factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
*/


factorial=1;
num=10;

while(true){
    factorial=factorial*num;
    num--;
    if (num==1){
        break;
    }
    console.log(factorial)
}

console.log(factorial)
