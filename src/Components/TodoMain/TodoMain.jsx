import { useSelector } from 'react-redux'
import { CONSTANTS } from '../../Constants/Constants'
import { useFiltredTodos } from '../../Hooks/useFiltredTodos'
import { TodoList } from '../UI/TodoList/TodoList'
import { TodoSelect } from '../UI/TodoSelect/TodoSelect'
import classes from './TodoMain.module.css'

export const TodoMain = () => {
  const todos = useSelector((state) => state.Todos.todos)
  const [todosArr, selectValue, onChangeSelectHandler] = useFiltredTodos(todos)
  const options = CONSTANTS.FILTRED_VALUE_OPTIONS

  return (
    <div className={classes.todoMain}>
      {Object.keys(todos).length > 0 && (
        <TodoSelect
          options={options}
          onChangeSelectHandler={onChangeSelectHandler}
          selectValue={selectValue}
        />
      )}
      <TodoList todos={todosArr} />
    </div>
  )
}
