import express from 'express'
import fs from 'fs'

const server = express() // Crear nuestro servidor
const port = 8080

//Agregar un middleware - convertir lo llega en el body a un json
server.use(express.json())

//GET /koders -> Regresar un json con una lista de koders,
//                  la data de los koders vendra del archivo kodemia.json

server.get('/koders', async (request, response) => {
    const dataFile = await fs.promises.readFile("./kodemia.json", "utf8")
    const json = JSON.parse(dataFile)
    const koders = json.koders

    response.json({
        success: true,
        data: {
            koders: koders
        }
    })
})

server.post('/koders', async (request, response) => {
    /**
     * Leer archivo de koders - Check
     * obtener los koders - Check 
     * obtener el nuevo desde el request.body - Check
     * agregar el nuevo koder a la lista de koders - Check
     * escribir en el archivo kodemia.json los koders actualizados
     * responder al cliente con el status
     */
    const dataFile = await fs.promises.readFile("./kodemia.json", "utf8")
    const json = JSON.parse(dataFile)
    const koders = json.koders

    const newKoder = request.body

    json.koders.push(newKoder)

    //json.koders = koders
    await fs.promises.writeFile('./kodemia.json', JSON.stringify(json, null, 2), 'utf8')

    console.log(newKoder)
    const message = {
        success: true,
        message: "Se agrego un nuevo koder exitosamente!!"
    }
    response.json(message)
})

server.patch('/koders/:idKoder', (request, response) => {

    // request.params.id
    // request.params.idKoder
    const id = request.params.idKoder
    console.log("El koder ID es: ", id)
    const message = { message: "Aqui se actualizaran los koders" }
    response.json(message)
})

server.delete('/koders', (request, response) => {
    const message = { message: "Aqui se eliminaran koders" }
    response.json(message)
})


server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

/*
    Practica:
    Generar las siguientes rutas:
        GET /koders -> Response json: { message: "Aqui estaran los koders" } - Check
        POST /koders -> Response json: { message: "Aqui se crearan koders" }
        PATCH /koders -> Response json: { message: "Aqui se actualizaran koders"}
        DELETE /koders -> Response json: { message: "Aqui se eliminaran koders"}
*/


// Endpoint -> 
/**
 * Conjunto de un METODO y una RUTA (path)
 * 
 * Cada endpoint va a implementar su propipa logica, y cada uno es independiente del otro
 */