import { useDispatch } from 'react-redux'
import { CONSTANTS } from '../../../Constants/Constants'
import { editTodo, removeTodo, toggleTodoСomplete } from '../../../Redux/Slice'
import { TodoButton } from '../TodoButton/TodoButton'
import classes from './TodoItem.module.css'

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()
  const { name, complete, id } = todo
  const editHandler = () => {
    const result = prompt(CONSTANTS.TITLE_EDIT_MODAL, name)
    if (result && result.toString().trim()) {
      dispatch(editTodo({ id, name: result.toString().trim() }))
    }
  }
  return (
    <div
      className={`${classes.todoItem}  ${complete ? classes.todoItemComplete : ''}`}
    >
      {name}
      <div className={classes.todoItemBtns}>
        <TodoButton
          btnHandler={() => dispatch(removeTodo(id))}
          btnName={CONSTANTS.DELETE_BTN_NAME}
        />
        <TodoButton
          btnHandler={() => dispatch(toggleTodoСomplete(id))}
          btnName={
            complete ? CONSTANTS.RESUME_BTN_NAME : CONSTANTS.COMPLETE_BTN_NAME
          }
        />
        <TodoButton
          btnHandler={editHandler}
          btnName={CONSTANTS.EDIT_BTN_NAME}
        />
      </div>
    </div>
  )
}
