/*
Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

- Un nuevo Set con los nombres de tu familia

- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
*/


const familia =["Alejandro", "Lucila", "Miguel", "Joaquín", "Paulina"]
const familiaSet= new Set(familia)
console.log(familiaSet)


familiaSet.add("Paulina")
console.log(familiaSet)

familiaSet.add("JavaScript")
console.log(familiaSet)
