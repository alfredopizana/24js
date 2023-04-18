import express from 'express'
import kodersRouter from './routers/koders.router.js'
import mentorsRouter from './routers/mentors.router.js'
const server = express() // Crear nuestro servidor
const port = 8080

//Agregar un middleware - convertir lo llega en el body a un json
server.use(express.json())

server.use('/koders', kodersRouter)
server.use('/mentors', mentorsRouter)


server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})


/**
 * Practica CRUD Mentores
 * 
 * GET /mentors -> con sus filtros por query params
 *                  extra: agregar un parametro adicional para filtar por los mentores que tengan una edad mayor al valor
 *                  x=25 -> Deberia de devolver los mentores mayores a 25 años
 * GET /mentors/:id
 * POST /mentors
 * PATCH /mentors/:id
 * 
 * Crear router para mentors
 * Utilizar el mismo archivo de kodemia.json 
 * 
 * 
 * ODM - Object Data Manager
 */


