
const URL_BASE_API = 'http://localhost:8080'

const getAllKoders = () => {
}


const createKoder = (newKoder) => {
    const url = `${URL_BASE_API}/koders`
    const options = {
        method: 'POST',
        headers: {
            'Context-Type': 'application/json',
        },
        body: JSON.stringify(newKoder)
    }
    return fetch(URL, options)
}

const getFormData = async () => {
    //obtener la data del formulario
    // generar el objeto que se mandara al endnpoint
    const koder = {
        name: 'Alfred',
        lastName: 'Espinosa',
        age: 29,
        gender: 'h',
        email: 'alfred@kodemia.mx',
        password: 'kodemia1234'
    }
    //mandar a llamar la funcion donde se mando a mi endpoint
    const response = await createKoder(koder)
    console.log(response)
    const data = await response.json()

}