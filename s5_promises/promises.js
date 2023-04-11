// const myFirstPromise = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         let error = null

//         error = new Error('Ocurrio un error')

//         if (error) {
//             reject(error)
//         }
//         resolve('Todo cool!! :D')
//     }, 3000)

// })

// console.log(myFirstPromise)


// myFirstPromise
//     .then((saludo) => {
//         // Cuando fue exitoso
//         console.log("Hola", saludo)
//     })
//     .catch((error) => {
//         // Cuando ocurrio un error
//         console.log(error)
//     })

/*
    Metodos para manejar las promesas:

    .then(()=>{}) // Maneja la promesa cuando haya sido exitosa
                    - Recibe un callback
                    - Pude obtener lo que se pasa en la funcion resolve

    .catch(()=>{}) // Maneja la promesa cuando haya sido rechaza
                    - Recibe un callback
                    - Recibe lo que se pasa en la funcion reject

*/



/**
 * Otra forma de ver las promesas es con wrapper
 *
 * -Envolviendo la promesa por una funcion ->
 *
 */


// function algoAsincrono() {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             let error = null
//             if (error) {
//                 reject(error)
//             }
//             resolve('Todo cool Manuel!! :D 😎')
//         }, 2000)

//     })
// }
// Aqui vendria un objeto de tipo promesa
// algoAsincrono()
//     .then((result) => {
//         console.log('Resultado: ', result)
//     })
//     .catch((error) => {
//         console.log('Error:', error)
//     })



// const promesa = new Promise((resolve, reject) => {
//     console.log('Promesa creada')
//     //
//     console.log('trabajando 1....')
//     console.log('trabajando 3....')
//     console.log('trabajando 4....')
//     console.log('trabajando 5....')
//     console.log('trabajando 6....')

// })
// console.log("==============================================")
// console.log(promesa)


// const promesaConWrapper = function wrapper() {
//     return new Promise((resolve, reject) => {
//         console.log('Promesa creada')
//         //
//         console.log('trabajando 1....')
//         console.log('trabajando 3....')
//         console.log('trabajando 4....')
//         console.log('trabajando 5....')
//         console.log('trabajando 6....')
//         setTimeout(() => {
//             let error = null
//             if (error) reject("Ocurrio un error")

//             resolve("Todo cool!!")
//         }, 200)
//     })
// }
// console.log(promesaConWrapper)

// promesaConWrapper()
//     .then((result) => {
//         console.log('Resultado: ', result)
//     })
//     .catch((error) => {
//         console.log('Error: ', error)
//     })




const person = {
    name: "Antonio",
    atSuperMarket: false,
    paidPantry: false,
    atHome: false
}

function goToSuperMarket(personToGoToSuperMarket) {

    return new Promise((resolve, reject) => {

        console.log(`${personToGoToSuperMarket.name} esta yendo al supermercado`)

        setTimeout(() => {
            personToGoToSuperMarket.atSuperMarket = true

            if (!personToGoToSuperMarket.atSuperMarket) {
                reject(`${personToGoToSuperMarket.name} no pudo llegar al supermercado`)
            }
            resolve(personToGoToSuperMarket)
        }, 300)

    })
}

function pay(personToPay) {
    return new Promise((resolve, reject) => {
        console.log(`${personToPay.name} esta pagando .... 💸`)

        setTimeout(() => {
            let error = null
            personToPay.paidPantry = true;
            if (!personToPay.paidPantry) {
                error = new Error("Ocurrio un error al pagar")
                reject(error)
            }

            resolve(personToPay)
        }, 200)

    })
}

function goHome(personToGoHome) {
    return new Promise((resolve, reject) => {
        console.log(`${personToGoHome.name} esta regresando a casa`)

        setTimeout(() => {
            personToGoHome.atHome = true
            if (!personToGoHome.atHome)
                reject('No pudo regresar a casa, choco! D:')

            resolve(personToGoHome)

        }, 1000)
    })
}

// // Promise Hell 
// goToSuperMarket(person)
//     .then((personAtSuperMarket) => {
//         /**
//          * {
//                 name: "Antonio",
//                 atSuperMarket: true,
//                 paidPantry: false,
//                 atHome: false
//             }
//          */
//         console.log(`${personAtSuperMarket.name} ya llego al supermercado`)
//         console.log(personAtSuperMarket)

//         pay(personAtSuperMarket)
//             .then((personThatPaid) => {

//                 /**
//                  * {
//                         name: "Antonio",
//                         atSuperMarket: true,
//                         paidPantry: true,
//                         atHome: false
//                     }
//                 */
//                 console.log(`${personThatPaid.name} pago exitosamente su despensa `)
//                 console.log(personThatPaid)

//                 goHome(personThatPaid)
//                     .then((personAtHome) => {
//                         console.log(`${personAtHome.name} ya llego a su casa`)
//                         console.log(personAtHome)
//                     })
//                     .catch((error) => {
//                         console.log(error)
//                     })

//             })
//             .catch((error) => {
//                 console.log('Error: ', error)
//             })

//     })
//     .catch((error) => {
//         console.log('Error: ', error)
//     })




/**
 * Encadenamiento de promesas
 * 
 */


// goToSuperMarket(person)
//     .then((personAtSuperMarket) => {
//         console.log(`${personAtSuperMarket.name} ya llego al supermercado`)
//         console.log(personAtSuperMarket)
//         return pay(personAtSuperMarket)
//     })
//     .then((personThatPaid) => {
//         console.log(`${personThatPaid.name} pudo pagar exitosamente`)
//         console.log(personThatPaid)
//         return goHome(personThatPaid)
//     })
//     .then((personAtHome) => {
//         console.log(`${personAtHome.name} llego casa 🏠`)
//         console.log(personAtHome)
//     })
//     .catch((error) => {
//         console.log('Error: ', error)
//     })

// Esta mas bonita!! :D 😃





/**
 * Otra forma de manejarlas
 * 
 * async / await
 * 
 * async -> Marca una funcion que se ejecutara como asincrona
 * await -> Espera el resultado de una promesa
 * 
 * 
 * Condiciones:
 *      - Para poder poder utilizar await necesitamos una funcion que marcaremos como asincrona.
 * 
 *      - Las funciones marcadas como asicronas (async), por defecto regresan una promesa
 * 
 */

console.log('Con async / await ..........................')


async function main() {

    const personAtSuperMarket = await goToSuperMarket(person)
    console.log(`${personAtSuperMarket.name} ya llego al super!!! 💃`)
    console.log(personAtSuperMarket)

    const personThatPaid = await pay(personAtSuperMarket);
    console.log(`${personThatPaid.name} el pago se concreto exitosamente 💸`)
    console.log(personThatPaid)

    const personAtHome = await goHome(personThatPaid)
    console.log(`${personAtHome.name} ya llego a casa 🏠`)
    console.log(personAtHome)
}


main()
    .then((data) => {
        console.log("Termino el proceso", data)
    })
    .catch((error) => {
        console.log('Error: ', error)
    })

console.log("Despues del main")

