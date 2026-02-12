import style from "./Cash.module.css";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import useCashBack from "../hooks/useCashBack.js";

const Cash = () => {

  const {produtos, totalLiquido, totalCashBack, Calcula} = useCashBack()

  return (
    <div className={style.CashBack}>
      <div className={style.Cash}>
        <form action="">
          <Input
            label = "Digite o valor do produto: "
            type = "number"
            placeholder = "2.50"
          />
          <div className={style.buttons}>
            <Button 
              text = "Add Produto"
              onClick = {Calcula}
            />
          </div>
        </form>
        
      </div>
      <div className={style.Back}>
        <div className={style.content}>
          <table className={style.tabela}>
            <thead>
              <tr>
                <th>Valor do Produto</th>
                <th>Valor do CashBack</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((produto, index) => (
                <tr key={index}>
                  <td>R$ {produto.liquido + produto.cashBack}</td>
                  <td>R$ {produto.cashBack.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className={style.resumo}>
            <div className={style.linha}>
              <span>Valor Líquido:</span>
              <span>R$ {totalLiquido.toFixed(2)}</span>
            </div>
            <div className={style.linha}>
              <span>Total CashBack:</span>
              <span>R$ {totalCashBack.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cash