import { TodoHeader } from '../TodoHeader/TodoHeader'
import { TodoMain } from '../TodoMain/TodoMain'
import classes from './TodoApp.module.css'

export const TodoApp = () => {
  return (
    <div className={classes.todoApp}>
      <TodoHeader />
      <TodoMain />
    </div>
  )
}
