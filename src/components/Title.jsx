import style from "./Title.module.css";

const Title = (props) => {
  return (
    <div className={style.title}>
      <h1>{props.text}</h1>
    </div>
  )
}

export default Title