import getData from "../Fetch/API/data.js";
export async function renderUserList() {
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

export default renderUserList;