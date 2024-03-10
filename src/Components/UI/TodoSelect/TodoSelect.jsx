import classes from './TodoSelect.module.css'
export const TodoSelect = ({ options, selectValue, onChangeSelectHandler }) => {
  return (
    <select
      className={classes.todoSelect}
      onChange={onChangeSelectHandler}
      value={selectValue}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}
