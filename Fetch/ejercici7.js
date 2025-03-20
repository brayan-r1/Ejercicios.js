//Ejercicio 7.1: Usa fetch() para obtener datos de la API https://jsonplaceholder.typicode.com/users y muestra los nombres.

import getData from "./API/data.js";

export async function displayUsers() {
  const users = await getData();  
  if (!users) return;  

  const userList = document.createElement("ul");  

  users.forEach(user => {
    const listItem = document.createElement("li");  
    listItem.textContent = user.name;  
    userList.appendChild(listItem);  
  });

  document.body.appendChild(userList);  
}

export default displayUsers;