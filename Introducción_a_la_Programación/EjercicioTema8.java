package com.example.clases;

public class EjercicioTema8 {

    public static void main(String[] args) {

        //Crear clase Persona.
        //Crear variables las privadas edad, nombre y telefono de la clase Persona.
        //Crear gets y sets de cada propiedad.
        //Crear un objeto persona en el main.
        //Utiliza los gets y sets para darle valores a las propiedades edad, nombre
        // y telefono, por último muéstralas por consola.

        Persona persona = new Persona();
        System.out.println("Persona creada\n");

        persona.setEdad(10);
        int edad=persona.getEdad();
        System.out.println("\nEdad: ");
        System.out.println(edad);

        persona.setNombre("Paulina");
        String nombre=persona.getNombre();
        System.out.println("\nNombre: ");
        System.out.println(nombre);

        persona.setTelefono(47371677);
        int telefono=persona.getTelefono();
        System.out.println("\nTelefono: ");
        System.out.println(telefono);

    }

}


class Persona {
    private int edad;
    private String nombre;
    private int telefono;

    public void setEdad(int edad){
        this.edad=edad;
    }

    public int getEdad(){
        return this.edad;
    }

    public void setNombre(String nombre){
        this.nombre=nombre;
    }

    public String getNombre(){
        return this.nombre;
    }

    public void setTelefono(int telefono){
        this.telefono=telefono;
    }

    public int getTelefono(){
        return this.telefono;
    }


}

