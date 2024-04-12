import {useState} from "react"

let Counter = 4;
function App() {
  
  const [todos, setTodos] = useState([{
    id:1,
    title:"First Todo",
    description:"Go to gym"
  },{ id:2,
    title:"First Todo",
    description:"Go to work"}
    ,{ id:3,
      title:"First Todo",
      description:"Go to collage"}
    ])

    function addTodo(){
      setTodos([...todos,{
        id:Counter++,
        title:Math.random(),
        description:Math.random()
      }])
      // const newTodos = [];
      // for (let i = 0; i < todos.length; i++) {
      //   newTodos.push(todos[i]); 
      // }
      // setTodos.push(  {
      //   id:4,
      //   title:Math.random(),
      //   description:Math.random()
      // }  )

      // setTodos(newTodos)

    }


  return (
    <div>
      <button onClick={addTodo}>Add a Todo</button>
       {todos.map(todo => <Todo key={todo.id} title={todo.title } description={todo.description}/>)}
       
    </div>
  )
}

// eslint-disable-next-line react/prop-types
function Todo({title, description}){
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}



export default App
