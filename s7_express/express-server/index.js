import express from 'express'

const server = express() // Crear nuestro servidor
const port = 8080

//En el requesta esta el paquete HTTP de la peticion del cliente
//Aquite recibe el GET /koders
server.get('/koders/manuel/:id', (request, response) => {

    //Como servidor voy a interpretar la peticion (request)
    // Regresar por medio de un paquete http en el response
    //response.writeHead('content-type', 'application/json')
    const id = request.params.id
    console.log("El id que se mando es: ", id)
    const message = {
        message: 'Hola desde GET'
    }
    const messageString = JSON.stringify(message)
    response.write(messageString)
    response.write(messageString)
    response.write(messageString)

    response.end()
})

server.post('/', (request, response) => {
    response.write('POST /')
    response.end()
})

server.patch('/', (request, response) => {
    response.write('PATCH /')
    response.end()
})

server.delete('/', (request, response) => {
    response.write('DELETE /')
    response.end()
})


server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

