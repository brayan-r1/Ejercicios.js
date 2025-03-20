export async function getData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`); 
      }
      const data = await response.json();  
      return data; 
    } catch (error) {
      console.error("Error al obtener los datos:", error.message); 
    }
  }

  export default getData;