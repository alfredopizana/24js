const myPromise = new Promise((resolve, reject) => { //Pending

    let error = null
    if (error)
        reject("")

    //resolve("Hola") // Cambiar estado de la promesa a resuelta
})

console.log(myPromise)


// myPromise
//     .then((saludo) => {
//         //console.log(saludo)

//     })
//     .catch((error) => {

//     })


// Async / Await

/**
 * async-  Marca una funcion que se ejecutara de manera asincrona
 *
 * await -  Espera el resultado de una promesa
 *          - Necesitamos marcar una funcion como async para poder utilizar await
 */

// async function promesas() {

//     const saludo = await myPromise;
//     console.log(saludo)

// }
// promesas()



function myWrapper() {

    return new Promise(() => {

    })
}
const wrapperResponse = myWrapper;
console.log(wrapperResponse)