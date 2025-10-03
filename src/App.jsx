import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Ragnar was Here!</h1>
      <h2>Oh no... merger conflict!!!</h2>
      <h2>and he barked at the mailman</h2>
      <h3>only on joshua branch</h3>
    </>
  );
}

export default App;
