const fs = require("fs")

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



// * 1. Crear una funcion que permita leer el archivo e imprimir en consola los koders

function readAllKoders() {

    fs.readFile("koders.json", "utf8", (error, data) => {

        if (error) {
            console.log(error)
            return;
        }
        console.log(data)
        //aqui tendriamos data... etc..

        //nuestro codigo para agregar seria despues esto
        //...

        // despues de agregar el koder al arreglo, entonces utilizar el fs.writeFile....
    })

}

readAllKoders()




//* 2. Crear una funcion que permita agregar un Koder y guardar el archivo con el cambio realizado


/**
 * Definir la funcion para agregar koder
 * Leer el archivo de koders.json
 * Despues de obtener koders hay que agregar el nuevo koder al arreglo y guardarlo en una variable
 * Guardar los koders actualizados utilizando el metodo fs.writeFile para reemplazar el archivo koders.json
 */