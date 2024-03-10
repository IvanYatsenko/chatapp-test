import classes from './TodoButton.module.css'

export const TodoButton = ({ btnName, btnHandler, btnDisabled = false }) => {
  return (
    <button
      className={classes.todoBtn}
      onClick={btnHandler}
      disabled={btnDisabled}
    >
      {btnName}
    </button>
  )
}
