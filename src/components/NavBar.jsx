import { Link, useLocation } from "react-router-dom"
import  style  from "./NavBar.module.css";
import logo from "../assets/INBECLogo.png"

const NavBar = () => {
  const location = useLocation();

  return (
    <>
      <div className={style.Nav}>
        <div className={style.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <nav>
          <span>
            <Link 
              to="/" 
              className={location.pathname === '/' ? style.active : style.link} >Home
            </Link>
          </span>
          <span>
            <Link 
              to="recursosservido" 
              className={location.pathname === '/recursosservido' ? style.active : style.link}>Recursos Servidor
            </Link>
          </span>
          <span>
            <Link 
              to="validasenha" 
              className={location.pathname === '/validasenha' ? style.active : style.link}>Valida Senha
            </Link>
          </span>
          <span><Link to="cashback" className={location.pathname === '/cashback' ? style.active : style.link}>Cash-Back</Link></span>
        </nav>
      </div>
  </>
  )
}

export default NavBar