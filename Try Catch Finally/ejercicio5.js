//Ejercicio 5.1: Escribe una función que divida dos números. Usa try...catch para manejar división por cero.

try {
    const divison = (a, b ) => {
        if (b === 0) throw new Error();
        return a / b;
    };

    console.log(divison(2, 4));


} catch (error) {
    alert("No se puede");
}

//Ejercicio 5.2: Crea un bloque donde intentes acceder a una variable no definida y captura el error.

try {
    console.log(nosirve);
} catch (error) {
    console.log("Error que encuetro:", error.message);
}

//Ejercicio 5.3 (Desafío): Usa try...catch...finally para asegurar que un mensaje se imprima siempre, haya error o no.

try {
    const an = parseInt(prompt("Ingrese edad"));
    if (isNaN(an)) {
        throw new Error("No es un número válido");
    }
    if ( an >= 18) {
        alert("Si puedes");
    } else {
        alert("Es menor lucer");
    }
} catch (error) {
    alert("Error jaja");
} finally{
   alert("Quieres comer?");
}

