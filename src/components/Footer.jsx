import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.list}>
          <ul>
          <li className={style.title}>Contatos: </li>
          <li>E-mail: ivaneudo.dev@gmail.com</li>
          <li>Linkedin: <a href="https:linkedin.com/in/ivaneudo-carvalho" target="_blank">/Ivaneudo</a></li>
          <li>GitHub: <a href="https://github.com/Ivaneudo" target="_blank">/Ivaneudo</a></li>
        </ul>
        <ul>
          <li className={style.title}>Objetivo: </li>
          <li>Está aplicação foi criada com o fim de "melhorar" um desafio técnico para o programa de bolsa Shark-School da Faculdade INBEC.</li>
        </ul>
      </div>
      <p>&copy; Ivaneudo and INBEC</p>
    </div>
  )
}

export default Footer