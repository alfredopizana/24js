const processArgv = require("process")

// const process = {
//     agrv = function()
// }

// process.argv

// const { argv } = process;



// function buscarPorId(id) {
//     console.log("El id es: ", id)
// }

// const id = processArgv.argv[2]

// buscarPorId(id)




//Proceso para eliminar
const koders = [{
    id: 1,
    "name": "Alfred",
    "lastName": "Pizana",
    "Age": "29",
    "favoriteFood": "Pizza"
},
{
    id: 2,
    "name": "Manuel",
    "lastName": "Dominguez",
    "Age": "36",
    "favoriteFood": "Carne"
},
{
    id: 3,
    "name": "Leonardo",
    "lastName": "Castro",
    "Age": "24",
    "favoriteFood": "Spaguetti"
},
{
    id: 4,
    "name": "Leonardo",
    "lastName": "Castro",
    "Age": "24",
    "favoriteFood": "Spaguetti"
},
{
    id: 10000,
    "name": "KoderN",
    "lastName": "Etc",
    "Age": "24",
    "favoriteFood": "Spaguetti"
}
]

const idDelKoderAEliminar = 1;

const kodersFiltrados = koders.filter((koder) => {
    if (koder.id !== idDelKoderAEliminar)
        return true;
    return false;
})

console.log(kodersFiltrados)
