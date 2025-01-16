import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div onClick={() => setCount((prev) => prev + 1)}>
        <h1>Counter</h1>

        {count}
      </div>
    </>
  );
}

export default App;
