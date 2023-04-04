//Un callback es una funcion que se recibe como argumento de otra funcion

// function avisar(error, data) {
//     if (error) {
//         console.log("No se pudo llegar al superMercado", error)
//     } else {
//         console.log("Ya LLegue al super");
//     }
// }

// function irAlSuperMercado(callback) {
//     console.log("Yendo al supermercado");
//     callback(undefined, "Llegue");
// }

// irAlSuperMercado(avisar);

// const avisarCopia = avisar;
// const b = avisarCopia;
// console.log(avisarCopia)
// console.log(b)

// // Firma: Es la forma en que una funcion recibe sus parametros

// function callback(error, data) {
//     if (error) {
//         //Maneja el error
//         console.log('Ah ocurrio un error', error)

//     } else {
//         //Continua
//     }
// }



// Crear el codigo para:
// 1. Avise cuando vaya al super
// 2. Avise cuando escoja la despensa
// 3. Avise cuando pague
// 4. Avise cuando llegue a casa
// Utilizar el mismo callback de avisar para todos los pasos


function avisar(error, message) {
    if (error) {
        console.log("Hubo un error", error)
    } else {
        console.log(message);
    }
    //Guard Clauses
}

function irAlSuperMercado(callbackDeNotification) {

    console.log("Estoy yendo al supermercado");
    if (true)
        callbackDeNotification(null, "Ya llegue al super")
}

function escogerDespensa(callbackDeNotification) {

    console.log("Escogiendo despensa");
    //Ya termino la accion y fue exitosa
    callbackDeNotification(null, "Termine de escoger despensa");
}

function pagar(callbackDeNotification) {
    console.log("Estoy pagando");
    //Fallo la action
    callbackDeNotification("Oh no! D: Tarjeta declinada", null);
}

// if ("Hola") -> true
// if (1) -> true
// if (0) -> false
// if (null) -> false
// if (null) -> false
// if("false") -> true

irAlSuperMercado(avisar)

setTimeout(() => {
    escogerDespensa(avisar)
}, 2000)


pagar(avisar)