import express from 'express'
import fs from 'fs'

// Router -> Subconjunto del servidor, lo agrupamos semanticamente (comparten uno o varios rasgos)

const router = express.Router() // Crea el router


router.get('/', async (request, response) => {

    const dataFile = await fs.promises.readFile("./kodemia.json", "utf8")
    const json = JSON.parse(dataFile)
    const koders = json.koders

    const { generation, location, age } = request.query
    /**
     * {
     *  generation: '24'
     *  name: 'Eddie'
     * } 
     * .includes
     * 
     * ?  key=value  &  key1=value1    
     * 
     * 
     * 
     */
    console.log(generation)
    let filteredKoders = koders;

    if (generation) {
        filteredKoders = filteredKoders.filter(koder => koder.generation === generation)
    }

    if (location) {
        filteredKoders = filteredKoders.filter(koder => koder.location === location)
    }

    if (age) {
        filteredKoders = filteredKoders.filter(koder => koder.age === age)
    }

    response.json({
        success: true,
        data: {
            koders: filteredKoders
        }
    })

})


//GET /koders -> Regresar un json con una lista de koders,
//                  la data de los koders vendra del archivo kodemia.json


router.post('/', async (request, response) => {
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

router.patch('/:idKoder', (request, response) => {

    // request.params.id
    // request.params.idKoder
    const id = request.params.idKoder
    console.log("El koder ID es: ", id)
    const message = { message: "Aqui se actualizaran los koders" }
    response.json(message)
})

router.delete('/', (request, response) => {
    const message = { message: "Aqui se eliminaran koders" }
    response.json(message)
})


export default router