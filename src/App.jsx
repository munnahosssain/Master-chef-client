import "./App.css";
import { useState } from "react";
import Header from "./Pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="mx-48">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
