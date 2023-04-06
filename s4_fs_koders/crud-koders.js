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



const fs = require("fs")
function readAll() {

    //Este bloque accede al sistema y lee el archivo con nombre koders.json y en el callback imprimimos data que es el objeto json
    fs.readFile("koders.json", "utf8", (err, registro) => {
        if (err) {
            console.log(err)
        } else {
            const registroParsed = JSON.parse(registro);
            console.log(registroParsed)
        }
    })
}

function readAllKodersAndFilterByAge() {

    //Este bloque accede al sistema y lee el archivo con nombre koders.json y en el callback imprimimos data que es el objeto json
    fs.readFile("koders.json", "utf8", (err, registro) => {
        if (err) {
            console.log(err)
        } else {
            console.log(registro)
            const registroParsed = JSON.parse(registro);
            console.log(registroParsed)
            const kodersConValoresEnteros = registroParsed.koders.map((koder) => {
                //Tenemos que convertir el valor de Age que es string a un valor numerico para poderlo filtrar
                const edadNumerica = parseInt(koder.Age)
                koder.Age = edadNumerica
                return koder;
            })
            //....
        }
    })
}

function addKoder() {
    // const registro = {
    //     "koders": [
    //         {
    //             "id": 1,
    //             "name": "Alfred",
    //             "lastName": "Pizana",
    //             "Age": "29",
    //             "favoriteFood": "Pizza"
    //         },
    //         {
    //             "id": 2,
    //             "name": "Manual",
    //             "lastName": "Dominguez",
    //             "Age": "36",
    //             "favoriteFood": "Carne"
    //         }
    //     ]

    // }

    // const nuevoKoder = {
    //     "id": 3,
    //     "name": "Leonardo",
    //     "lastName": "Castro",
    //     "Age": "24",
    //     "favoriteFood": "Spaguetti"
    // }



    // registro.koders.push(nuevoKoder)


    // console.log(registro)






    /// Aqui comienza nuestro codigo



    fs.readFile("koders.json", "utf8", (error, data) => {
        if (error) {
            console.log(error)
        } else {
            console.log("Encotre un registro de koders")
            //Vamos a convertir la cadena de texto resultante a un objeto para poder modificar los registros
            let registro = JSON.parse(data)
            console.log(registro)

            const nuevoKoder = {
                "id": 10000,
                "name": "KoderN",
                "lastName": "Etc",
                "Age": "24",
                "favoriteFood": "Spaguetti"
            }


            registro.koders.push(nuevoKoder)
            console.log("Ok, listo! Se agrego un nuevo koder a mi objeto registro")
            console.log(registro)


            fs.writeFile("koders.json", JSON.stringify(registro, null, "  "), (errorAlEscribirKoder) => {

                if (errorAlEscribirKoder) {
                    console.log(errorAlEscribirKoder)
                } else {

                    console.log("Listo!!! nuestro koder se registro exitosamente el archivo koders.json")
                }

            })
        }
    })











    // fs.writeFile("koders.json", JSON.stringify(nuevoKoder), (err) => {
    //     if (err) {
    //         console.log(err)
    //     }
    //     else {
    //         console.log("El archivo se escribio exitosamente")
    //     }
    // })
}

readAllKoders()

//addKoder()