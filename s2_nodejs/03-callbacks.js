//Un callback es una funcion que se recibe como argumento de otra funcion

function avisar(error, data) {
    if (error) {
        console.log("No se pudo llegar al superMercado", error)
    } else {
        console.log(data);
    }
}

function irAlSuperMercado(callback) {
    console.log("Yendo al supermercado");
    callback("Oh no! Temblo", "Llegue al supermercado");
}

irAlSuperMercado(avisar);

const avisarCopia = avisar;
const b = avisarCopia;
console.log(avisarCopia)
console.log(b)

// Firma: Es la forma en que una funcion recibe sus parametros



function callback(error, data) {
    if (error) {
        //Maneja el error
        console.log('Ah ocurrio un error', error)
    } else {
        //Continua
    }
}



// Crear el codigo para 
// 1. Avise cuando vaya al super
// 2. Avise cuando escoja la despensa
// 3. Avise cuando pague
// 4. Avise cuando llegue a casa