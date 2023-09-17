import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1)
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Increase value</button>
      <br />
      <button
      onClick={removeValue}>Decrease value</button>
    </>
  );
}

export default App;
