/**
 * Practica de File System
 * A partir del arhivo koders.json
 * 
 * Realizar las siguientes funciones:
 * 
 * 1. Crear una funcion que permita leer el archivo e imprimir en consola los koders
 * 2. Crear una funcion que permita agregar un Koder y guardar el arhico con el cambio realizado
 * 3. Crear una funcion que permita eliminar a un koder por su id y guardar el archivo con el cambio realizado
 * 4. Crear una funcion que permita obtener a los koders que sean mayores de 25 años
 * 5. Crear una funcion que permita editar a un koder por su id y guardar el archivo con el cambio realizado
 * 
 * Extra: 
 * 6. Crear una funcion que permita recibir un id utilizando process.argv y devuelva el correspondiente si existe
 * 
 * 
 * Req:
 * Utilizar callbacks API del FS
 * 
 * JSOn.parse() -> Convierte una cadena o string a un objeto js
 * JSON.stringify() -> Convierte un objeto a string
 * 
 *  JSON.stringify({}, null, "  ")    
 * 
 */



const hellos = require("./hello-world")



hellos.sayHello()

hellos.adios()