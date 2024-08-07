import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [idupdate, setIdupdate] = useState(1);

  function idUpdater(id) {
    setIdupdate(id);
  }

  return (
    <div>
     
      <Todo id={idupdate} />

      <button onClick={() => idUpdater(1)}>1</button>
      <button onClick={() => idUpdater(2)}>2</button>
      <button onClick={() => idUpdater(3)}>3</button>
      <button onClick={() => idUpdater(4)}>4</button>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todo?id=" + id)
      .then(async function (res) {
        const json = await res.json();
        setTodo(json.todo);
      });
  }, [id]);

  return (
    <div>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </div>
  );
}

export default App;
