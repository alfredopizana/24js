//importamos el modulo de http de nodejs
const http = require('http')

// requestListener
// const server = http.createServer((request, response) => {

//     const url = request.url
//     console.log("URL: ", url)

//     const method = request.method
//     console.log("Method: ", method)


//     response.write("Hola desde mi servidor")
//     response.end()
// })

// server.listen(8080, () => {
//     console.log('server listening on port 8080')
// })
// Puertos:
// 80 -> http
// 443 -> https
// 22 -> ssh
// 8080 -> Puerto de desarrollo


// Para parar el servicio ->ctrl + c


/**
 * Reaccionar a las siguientes rutas:
 * 
 * GET /koders -> Response: Aqui estaran todos los koders
 * POST /koders -> Response: Aqui puedes crear un koder
 * X /x -> Response: No conozco la solicitud ---------- GET /hola  POST /saludo
 * 
 */



// const server = http.createServer((request, response) => {

//     const url = request.url
//     console.log("URL: ", url)

//     const method = request.method
//     console.log("Method: ", method)

//     // url === "/koders" &&
//     //     method === "GET"
//     //     ? response.write("Aqui estaran todos los koders")
//     //     : response.write("No conozco la solicitud")


//     // url === "/koders" && method === "POST"
//     //     ? response.write("Aqui estaran todos los koders")
//     //     : response.write("No conozco la solicitud")

//     // response.end()

//     if (url === "/koders") {
//         if (method === "GET") {
//             response.write("Aqui estaran todos los koders")
//         } else if (method === "POST") {
//             response.write("Aqui puedes crear un koder")
//         } else {
//             response.write("No conozco la solicitud")
//         }
//     } else {
//         response.write("No conozco la solicitud")
//     }
//     response.end()
// })





/**
 * GET /koders -> Response { "message": "Aqui se obtendran los koders"}
 * 
 * 
 * Tip: Content-Type: mimetype
 */


const server = http.createServer((request, response) => {

    const url = request.url
    console.log("URL: ", url)

    const method = request.method
    console.log("Method: ", method)

    const headers = request.headers;
    console.log(headers)

    const body = request.body
    console.log(body)

    response.writeHead(200, {
        "Content-Type": "application/json"
    })

    if (url === "/koders") {
        if (method === "GET") {

            const message = {
                message: "Aqui se obtendran los koders"
            }
            const messageString = JSON.stringify(message)
            response.write(messageString)

        } else if (method === "POST") {
            response.write("Aqui puedes crear un koder")
        } else {
            response.write("No conozco la solicitud")
        }
    } else {
        response.write("No conozco la solicitud")
    }
    response.end()
})

server.listen(8080, () => {
    console.log('server listening on port 8080')
})

// REST



// Investigar sobre expressjs
// npm 