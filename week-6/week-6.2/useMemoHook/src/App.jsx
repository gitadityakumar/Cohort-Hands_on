import { useMemo, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const sum = useMemo(() => {
    let counter = 0;
    for (let i = 1; i <= inputValue; i++) {
      counter += i;
    }
    return counter;
  }, [inputValue]);

  return (
    <div>
      <input
        onChange={(e) => {
          setInputValue(parseInt(e.target.value));
        }}
        placeholder={"Find sum from 1 to n"}
        type="number"
      />
      <br />
      Sum from 1 to {inputValue} is {sum}
      <br />
      <button onClick={() => setCounter(counter + 1)}>
        Counter ({counter})
      </button>
    </div>
  );
}

export default App;
