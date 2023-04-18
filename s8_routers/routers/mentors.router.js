import express from 'express'
import fs from 'fs'


const router = express.Router()


router.get("/", async (request, response) => {

    const { generation } = request.query;
    const dataFile = await fs.promises.readFile('./kodemia.json', 'utf8')

    const json = JSON.parse(dataFile)

    let filteredMentors = json.mentors;
    if (generation) {


        filteredMentors = filteredMentors.filter((mentor) => mentor.generations.includes(generation))


    }


    response.json({
        success: true,
        data: {
            mentors: filteredMentors
        }
    })




})

export default router