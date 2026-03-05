import {useState, useRef } from "react";
import style from "../components/Senha.module.css";

const useValidaSenha = () => {
  const [Msg, setMsg] = useState(``);
  const alertaRef = useRef(null);

  const valida = (e) => {
    e.preventDefault();

    const form = e.target.closest('form');
    const inputs = form.querySelectorAll('input');
    const senha = inputs[0].value;

    alertaRef.current.classList.remove(style.alerta, style.estavel, style.atencao);

    if (Numeros(senha) && MaiusculasMinusculas(senha)) {
      alertaRef.current.classList.add(style.estavel);
      return setMsg(`Valida.`);
    }

    alertaRef.current.classList.add(style.alerta);
    return setMsg(`Invalida: Sua senha deve ter no míniomo 8 caracteres, letras maiusculas e minuscas.`);
  }

  function MaiusculasMinusculas (senha) {
    const maiusculas = /[A-Z]/.test(senha);
    const minusculas = /[a-z]/.test(senha);
    
    if (maiusculas && minusculas) {
      return true;
    }

    return false;
  }

  function Numeros (senha) {
    const numero = /\d/.test(senha);
    const quantidade = senha.length;

    if (numero) {
      if (quantidade < 8) {
        return false;
      }
    }

    return true;
  }

  return {
    alertaRef,
    Msg,
    valida
  }
}

export default useValidaSenha;