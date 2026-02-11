import { Outlet } from "react-router-dom"
import style from'./App.module.css';
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx"

function App() {

  return (
    <>
      <div className={style.Container}>
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App;
