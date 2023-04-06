const fs = require('fs');

//import fs from 'fs'




function createKoder() {


    // ...

    fs.writeFile("hola-koders.txt", "Hola koders!!! :D con import", (error) => {
        if (error) {
            console.log('Ocurrio un error: ', error)
            return;
        }
        console.log("Se ha creado el archivo exitosamente!!! YAY!!! :D")
    })

}

createKoder()