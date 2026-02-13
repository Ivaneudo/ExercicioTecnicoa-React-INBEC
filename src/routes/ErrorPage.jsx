import Title from '../components/Title';
import "../index.css";

const ErrorPage = () => {
  console.log("ErrorPage renderizou.")
  return (
    <div className='Error'>
      <Title 
        text = "Error - Diretorio não existente. Volte para a home."
      />
    </div>
  )
}

export default ErrorPage