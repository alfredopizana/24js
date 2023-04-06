
// ()=>{} Arrow function es una funcion anomima
// procces.argv

function imprimirAlgo(nombre, edad) {
    console.log("Hola")
}

// npm -> node package manager

const notify = (error, message) => {
    if (error) {
        console.log("Ocurrio un error", error)
    }
    else {
        console.log(message);
    }
}


/**
 * 
 * @param {string} avisar Notifica...
 * @param {string} bla 
 * @param {object} etc 
 */
function goToSuperMarket(avisar) {
    console.log("Yendo al super mercado");
    setTimeout(() => {
        avisar(null, "Llegue al super mercado");
    }, 2000)
}

function chooseProducts(callback) {
    console.log("Escogiendo productos..")
    setTimeout(() => {
        callback("No encontre los productos", null)
    }, 3000)
}
function pay(callback) {
    console.log("Estoy pagando . . .")
    setTimeout(() => {
        callback(null, "Es pago se completo exitosamente")
    }, 2000)
}

goToSuperMarket((error, message) => {
    if (error) {
        console.log("Oh no, ocurrio un error", error)
        return // retorna undefined
        //Salida Temprana
    }
    console.log(message) //Legue al super mercado


    chooseProducts((error, message) => {
        if (error) {
            console.log("Ocurrio un problema con los productos", error)
            return
        }
        console.log(message)
        pay((error, message) => {
            if (error) {
                console.log("Error en el pago", error)
                return
            }
            console.log(message)
        })
    })


}
)

/**
 * Ejercicios de callbacks del proceso de inscripcion en kodemia
 * Ir a la documentacion del modulo del file system de Callback API
 * 
 * Para archivos
 * 1. .writeFile
 * 2. .readFile
 * 3. .appendFile
 * 4. .unLinkFile
 * 5. .copyFile
 * 
 * Para directorios
 * 1. .mkdir
 * 2. .readdir
 * 3. .rmdir
 */