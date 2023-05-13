import { connectMongoose } from "./src/libs/db.js"
import { server } from "./src/server.js"

//Hay que definir la funcion para conectarnos la DB
//Cuando la conexion se exitosa, entonces levantar el server en el puerto 8080
connectMongoose()
    .then((connection) => {
        console.log("Conexion a la base de datos exitosa")
        server.listen(8080, () => {
            console.log("Server listening on port 8080")
        })
    })
    .catch((error) => {

    })




//localhost:8080/user/hola/saludo
