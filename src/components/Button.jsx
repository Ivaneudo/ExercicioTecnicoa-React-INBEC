import style from "./Button.module.css"

const Button = (props) => {
  return (
    <button className={style.button} {...props}>{props.text}</button>
  )
}

export default Button