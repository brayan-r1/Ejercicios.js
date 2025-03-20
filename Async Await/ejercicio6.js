//Ejercicio 6.1: Crea una función esperarSegundos(segundos) que use setTimeout con async/await.
async function myfunci(){
    console.log("Adentro 1")
    console.log("Adentro 2")
    await setTimeout(() => {console.log("Adentro 3")},5000);
    console.log("Adentro 4")
}

console.log("Afurera 1")

myfunci()

console.log("Afuera 2")