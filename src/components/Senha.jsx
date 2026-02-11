import style from "./Senha.module.css";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import useValidaSenha from "../hooks/useValidaSenha.js"

const Senha = () => {

  const {alertaRef, Msg, valida} = useValidaSenha();

  return (
    <div className={style.senha}>
      <div className={style.pass}>
        <form action="">
          <Input 
            label = "Verifique se sua senha é forte: "
            placeholder = "senha:"
            type = "password"
          />
        <Button 
          text = "Enviar"
          onClick = {valida}
        />
        </form>
        <p>Sua senha é: <span ref={alertaRef} className={style.alertaSpan}>{Msg}</span></p>
      </div>
      
    </div>
  )
}

export default Senha