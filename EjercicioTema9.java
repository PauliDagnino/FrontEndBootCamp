package com.example.clases;

public class EjercicioTema9 {

    public static void main(String[] args) {

        //Crea una clase Persona con las siguientes variables:
        //La edad
        //El nombre
        //El teléfono

        //Una vez creada la clase, crea una nueva clase Cliente que herede de Persona,
        // esta nueva clase tendrá la variable credito solo para esa clase.

        //Crea ahora un objeto de la clase Cliente que debe tener como propiedades la edad,
        // el telefono, el nombre y el credito, tienes que darles valor y mostrarlas por pantalla.


        //Una vez hecho esto, haz lo mismo con la clase Trabajador que herede de Persona,
        // y con una variable salario que solo tenga la clase Trabajador.

        System.out.println("Nuevo Cliente");
        Cliente cliente = new Cliente();
        cliente.setEdad(27);
        System.out.println("Edad: " + cliente.getEdad());
        cliente.setNombre("Paulina");
        System.out.println("Nombre: " + cliente.getNombre());
        cliente.setTelefono(671161699);
        System.out.println("Telefono: " + cliente.getTelefono());
        cliente.credito=50;
        System.out.println("Credito: " + cliente.credito);

        System.out.println("\n\n\nNuevo Trabajador");
        Trabajador trabajador = new Trabajador();
        trabajador.setEdad(40);
        System.out.println("Edad: " + trabajador.getEdad());
        trabajador.setNombre("Joaquin");
        System.out.println("Nombre: " + trabajador.getNombre());
        trabajador.setTelefono(687533311);
        System.out.println("Telefono: " + trabajador.getTelefono());
        trabajador.credito=199;
        System.out.println("Credito: " + trabajador.credito);
        trabajador.salario=1000;
        System.out.println("Salario: " + trabajador.salario);

    }
}

abstract class Persona_ejercicio9{

    int edad;
    String nombre;
    int telefono;

    abstract public int getEdad();
    abstract public void setEdad(int edad);

    abstract public String getNombre();
    abstract public void setNombre(String nombre);

    abstract public int getTelefono();
    abstract public void setTelefono(int telefono);


}

class Cliente extends Persona_ejercicio9{

    public int getEdad(){
        return this.edad;
    }

    public void setEdad(int edad){
        this.edad=edad;
    }

    public String getNombre(){
        return this.nombre;
    }

    public void setNombre(String nombre){
        this.nombre=nombre;

    }

    public int getTelefono(){
        return this.telefono;
    }

    public void setTelefono(int telefono){
        this.telefono=telefono;
    }

    public int credito;

}

class Trabajador extends Cliente{
    public int salario;

}