import { useState, useRef } from "react";
import style from "../components/Recusos.module.css";

const useMonitoramento = () => {

  const [Msg, setMsg] = useState(``);
  const alertaRef = useRef(null);

  const VerificaPorcentagem = (e) => {
    e.preventDefault();

    const form = e.target.closest('form');
    const inputs = form.querySelectorAll('input');
    const cpu = Number(inputs[0].value);
    const ram = Number(inputs[1].value);

    alertaRef.current.classList.remove(style.alerta, style.estavel, style.atencao);

    if (cpu >= 80 && ram >= 80) {
      alertaRef.current.classList.add(style.alerta);
      return setMsg(`ALERTA: Sistema Sobrecarregado.`);
    } else if (cpu <=50 && ram <= 50) {
      alertaRef.current.classList.add(style.estavel);
      return setMsg(`Sistema Estável.`);
    } else {
      alertaRef.current.classList.add(style.atencao);
      return setMsg(`ATENÇÃO: Uso Moderado`);
    }
  }

  return {
    Msg,
    alertaRef,
    VerificaPorcentagem
  };
}

export default useMonitoramento;

