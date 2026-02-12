import { useState } from "react";

const useCashBack = () => {
  const [produtos, setProtudos] = useState([]);

  const Calcula = (e) => {
    e.preventDefault();

    const form = e.target.closest('form');
    const inputs = form.querySelectorAll('input');
    const valor = parseFloat(inputs[0].value.replace(',', '.'));
    let cashBack = 0;

    if (valor > 100) {
      cashBack = (valor * 10) / 100;
    } else {
      cashBack = (valor * 5) / 100;
    }

    const liquido = valor - cashBack;
    const produto = {liquido, cashBack};
    
    setProtudos([...produtos, produto]);

    inputs[0].value = "";
  }

  const totalLiquido = produtos.reduce((acc, p) => acc + p.liquido, 0);
  const totalCashBack = produtos.reduce((acc, p) => acc + p.cashBack, 0);

  return {
    produtos,
    totalLiquido,
    totalCashBack,
    Calcula
  };
}

export default useCashBack;