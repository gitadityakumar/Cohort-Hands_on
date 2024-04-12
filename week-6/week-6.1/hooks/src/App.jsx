import { useState, useEffect } from "react";
import axios from 'axios';
function App() {
  const [todos, setTodos] = useState([]);

// pooling or running a code again & again for always 
//we can use setInterval for this 
useEffect(() => {

  setInterval(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(function(response) {
        const todos = response.data.todos;
        setTodos(todos);
      })
      .catch(function(error) {
        console.error('Error fetching todos:', error);
      });
  }, 10000);
  
 
  
}, [])
  
  

  
  return (
    <>
     <h1 style={{ textAlign: 'center', backgroundColor: '#4CAF50', color: '#ffffff', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>Todo from server using useEffect</h1>

     <div>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
     </div>
       
    </>
  )
}

function Todo({ title, description }) {
  return (
    <>
      <div style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
       <h1> {title}</h1>
        <h2> {description}</h2>
      </div>
    </>
  );
}


export default App
