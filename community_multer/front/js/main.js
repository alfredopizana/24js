const URL_BASE_API = 'http://localhost:8080'

const getAllKoders = () => {
}


const signUp = async (newKoder) => {
    const url = `${URL_BASE_API}/users`
    const options = {
        method: 'POST',
        body: newKoder
    }
    return fetch(url, options)
}

const login = (data) => {
    const url = `${URL_BASE_API}/auth/login`
    const options = {
        method: 'POST',
        body: JSON.stringify(data)
    }
    return fetch(url, options)
}


const getFormData = async () => {
    //obtener la data del formulario
    // generar el objeto que se mandara al endnpoint
    const user = {
        name: 'Alfred',
        lastName: 'Espinosa',
        email: 'alfred@kodemia.mx',
        password: 'kodemia1234'
    }
    //mandar a llamar la funcion donde se mando a mi endpoint
    const response = await signUp(koder)
    console.log(response)
    const data = await response.json()
    try {


    } catch (error) {
        console.log(error)
    }

}



const submitFormButton = document.getElementById("submit-form")

let inputsValue = document.querySelectorAll("#signup-form input.field");
let avatarInput = document.getElementById("avatar")

let data = {};

inputsValue.forEach((fieldsData) => {
    fieldsData.addEventListener("keyup", (event) => {
        let property = event.target.name;
        let value = event.target.value;
        data[property] = value;
        console.log(data)
    });
});
avatarInput.addEventListener("change", (event) => {
    console.log(event.target.files)
    if (event.target.files[0]) {
        let property = event.target.name;
        let value = event.target.files[0];
        data[property] = value;
    }
    console.log(data)
});

submitFormButton.addEventListener("click", (event) => {
    event.preventDefault()

    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("password", data.password);
    if (data.avatar) {
        formData.append("avatar", data.avatar);
    }
    console.log(formData)
    signUp(formData)
        .then((response) => {
            return response.json()

        })
        .then((userCreated) => {
            console.log(userCreated)
        })
        .catch((error) => { console.log(error) })
    event.preventDefault();
})