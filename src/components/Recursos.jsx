import useMonitoramento from "../hooks/useMonitoramento.js";
import Button from "./Button.jsx";
import style from "./Recusos.module.css";
import Input from "./Input.jsx";

const Recursos = () => {

  const {Msg, alertaRef, VerificaPorcentagem} = useMonitoramento();

  return (
    <div className={style.PegaRecurso}>
      <div className={style.FormRecurso}>
        <form action="">
          <Input 
            label = "Quanto de CPU você está consumindo?"
            placeholder = "0%"
          />
          <Input 
            label = "Quanto de Memória RAM você está consumindo?"
            placeholder = "0%"
          />
          <Button 
            onClick={VerificaPorcentagem}
            text = "Enviar"
          />
        </form>
        <p>O seu status: <span ref={alertaRef} className={style.alertaSpan}>{Msg}</span></p>
      </div>
    </div>
  )
}

export default Recursos