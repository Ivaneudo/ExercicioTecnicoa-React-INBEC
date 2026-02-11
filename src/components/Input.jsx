import style from "./Input.module.css";

const Input = (props) => {
  return (
    <label className={style.label}>
      <span>{props.label}</span>
      <input type={props.type} placeholder={props.placeholder} value={props.value}/>
    </label>
  )
}

export default Input