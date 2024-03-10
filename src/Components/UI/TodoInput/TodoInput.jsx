import classes from './TodoInput.module.css'

export const TodoInput = ({ inputValue, onChangeInput, inputPlaceholder }) => {
  return (
    <input
      className={classes.todoInput}
      value={inputValue}
      onChange={onChangeInput}
      placeholder={inputPlaceholder}
    />
  )
}
