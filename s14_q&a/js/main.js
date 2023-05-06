
const URL_BASE_API = "http://localhost:8080"
const getKoders = async () => {

    const allKoders = await fetch(`${URL_BASE_API}/koders`)

    const allKodersJSON = await allKoders.json()
    console.log(allKodersJSON)
}

const createKoder = async () => {
    try {



        const newKoder = {
            name: "Alfred2",
            lastName: "Pizana",
            generation: 24,
            age: 29,
            location: "cdmx",
            email: "alfred2@kodemia.mx",
            password: "1234"
        }
        const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDFmNGJjMmM2ODE3M2E0NTFhMjRmYiIsImlhdCI6MTY4MjM4NzM2MCwiZXhwIjoxNjgyNDczNzYwfQ.wUF1_Uv8BHtyEChZBLEgQ_0KWDXhl8eJ7aI4vwWY_KQ'

        //sessionStorage
        //localStorage

        localStorage.setItem("token", authToken)

        const token = localStorage.getItem("token")
        console.log({ token })



        const options = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newKoder)
        }


        const response = await fetch(`${URL_BASE_API}/koders`, options)
        console.log({ response })
        const koderCreated = await response.json()
        console.log(koderCreated)



    } catch (error) {
        console.log(error)
    }



}




createKoder()