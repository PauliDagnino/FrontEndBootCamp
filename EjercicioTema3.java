package com.example.clases;

import javafx.application.Application;
import javafx.stage.Stage;





public class EjercicioTema3  {


    public static void suma(int a, int b, int c) {
        System.out.println(a+b+c);
    }

    public static void main(String[] args) {

        // Primera parte:
        // Crear una función con tres parámetros que sean números que se suman entre sí.
        // Llamar a la función en el main y darle valores.
        suma (10, 30, 2);


        // Segunda parte:
        // Crear una clase coche.
        // Dentro de la clase coche, una variable numérica que almacene el número de puertas que tiene.
        // Una función que incremente el número de puertas que tiene el coche.
        // Crear un objeto miCoche en el main y añadirle una puerta.
        // Mostrar el número de puertas que tiene el objeto.

        Coche miCoche = new Coche();
        miCoche.SumarPuertas();
        System.out.println(miCoche.puertas);


    }

}
class Coche {
    public int puertas=8;
    public void SumarPuertas(){
        this.puertas++;
    }

}
