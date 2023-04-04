// Crear una funcion que reciba un nombre como parametro y devuelva un saludo con dicho nombre

// Output -> 'Hola {nombre}, buenas noches'

function greeting(nombre) {
    return `Hola ${nombre}, buenas noches`;
}
const greetingJavier = greeting("Javier");
console.log(greetingJavier);

// Crear una funcion que devuelva un nombre aleatorio de un arreglo 


function getRandomName() {
    const names = ["Javier", "Antonio", "Iyari", "Manuel"];
    const index = Math.floor(Math.random() * (names.length + 1));
    return names[index];
}

console.log(getRandomName());
console.log(getRandomName());
console.log(getRandomName());
console.log(getRandomName());



