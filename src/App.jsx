import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <Button
          name="Vist our website to learn more"
          location="home"
          outline=""
        />
        <p>hello</p>
        <Button name="Give feedback" location="home" outline="true" />
      </div>
    </>
  );
}

export default App;
