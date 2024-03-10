import { TodoItem } from '../TodoItem/TodoItem'
import classes from './TodoList.module.css'

export const TodoList = ({ todos }) => {
  return (
    <div className={classes.todoList}>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />
      })}
    </div>
  )
}
