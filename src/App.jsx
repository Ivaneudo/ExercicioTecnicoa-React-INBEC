import { Outlet } from "react-router-dom"
import style from'./App.module.css';
import NavBar from "./components/NavBar";

function App() {

  return (
    <>
      <div className={style.Container}>
        <NavBar />
        <Outlet />
        <h2>roda pé</h2>
      </div>
    </>
  )
}

export default App;
