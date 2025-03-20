//Ejercicio 4.1: Crea un objeto JavaScript que represente un libro (con título, autor y año) y conviértelo a JSON.

const objet = {
    "Tema": "Los 7 hábitos de los adolecentes altamente efectivos",
    "Autor": "Sean Covey",
    "Año":1989, 

}

const objetajson = JSON.stringify(objet)
console.log(objetajson)

//Ejercicio 4.2: Dado el JSON '{"nombre": "Ana", "edad": 30, "ciudad": "Madrid"}', conviértelo a objeto y muestra la edad.

const json = '{"nombre": "Ana", "edad": 30, "ciudad": "Madrid"}';

const josonaObjeto = JSON.parse(json)
console.log(josonaObjeto)

//Ejercicio 4.3: Parsea el JSON '[{"id": 1, "producto": "Lápiz"}, {"id": 2, "producto": "Borrador"}]' y lista los productos.

const json2 = '[{"id": 1, "producto": "Lápiz"}, {"id": 2, "producto": "Borrador"}]'
const productos1 = JSON.parse(json2)

productos1.forEach(elemen => {
    console.log(elemen.producto)
    
});



