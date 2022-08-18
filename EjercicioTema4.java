package com.example.clases;

public class EjercicioTema4 {

    public static void main(String[] args) {

     System.out.println("\n \nIf");

    //Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
    //Pista: Los números inferiores a 0 son negativos y los superiores, positivos.

    int numeroIf =5;

    if (numeroIf>=0){
        System.out.println("Numero es positivo");
    }
    else if (numeroIf==0){
        System.out.println("Numero es cero");
    }
    else{
        System.out.println("Numero es negativo");
    }

     System.out.println("\n \nWhile");
    //Crea un bucle While, este bucle tendrá que tener como condición que la variable numeroWhile sea inferior a 3,
    // el bloque de código que tendrá el bucle deberá:
    //Incrementar el valor de la variable en uno cada vez que se ejecute.
    // Mostrarlo por pantalla cada vez que se ejecute.

    int numeroWhile=3;

    while (numeroWhile <3){
        System.out.println(numeroWhile);
        numeroWhile=numeroWhile+1;
    }

    System.out.println("\n \nDo While");
    //Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.

    int contador=3;

    do {
        System.out.println(contador);
        contador=contador+1;
    } while (contador<3);

    System.out.println("\n \nFor");
    //Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición será que la
    // variable sea igual o menor que 3, se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse por pantalla.

    for (int numeroFor=0; numeroFor<=3; numeroFor=numeroFor+1){
        System.out.println(numeroFor);
    }

    System.out.println("\n \nSwitch");
    //Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones del año.
    // Dependiendo del valor de la variable estacion se deberá mandar un mensaje por consola informando de la estación en la que está.
    // También habrá que poner un default para cuando el valor de la variable no sea una estación.

    var estacion = "verano";

    switch(estacion){
        case "primavera":
            System.out.println("Es primavera");
            break;
        case "verano":
            System.out.println("Es verano");
            break;
        case "otonio":
            System.out.println("Es otonio");
            break;
        case "invierno":
            System.out.println("Es invierno");
            break;
        default:
            System.out.println("La variable no es una estacion");

    }
    }
}
