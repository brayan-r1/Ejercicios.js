//**Ejercicio 7.3** (Desafío): Combina `async/await` con `fetch` para obtener y mostrar datos de una API pública.

export async function fetchData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`); 
      }
      const data = await response.json();  
      return data;  
    } catch (error) {
      console.error("Error fetching data:", error.message);  
    }
  }
  
  export default fetchData;