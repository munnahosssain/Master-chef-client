import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
