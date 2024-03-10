import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { CONSTANTS } from '../../Constants/Constants'
import { addTodo } from '../../Redux/Slice'
import { TodoButton } from '../UI/TodoButton/TodoButton'
import { TodoInput } from '../UI/TodoInput/TodoInput'
import { TodoTitle } from '../UI/TodoTitle/TodoTitle'
import classes from './TodoHeader.module.css'

export const TodoHeader = () => {
  const [textInput, setTextInput] = useState('')

  const dispatch = useDispatch()

  const addTodoHandler = () => {
    dispatch(addTodo({ name: textInput.trim() }))
    setTextInput('')
  }
  return (
    <div className={classes.todoHeader}>
      <TodoTitle />
      <div className={classes.todoAddBlock}>
        <TodoInput
          type="text"
          inputPlaceholder={CONSTANTS.INPUT_PLACEHOLDER}
          inputValue={textInput}
          onChangeInput={(event) => {
            setTextInput(event.target.value)
          }}
        />
        <TodoButton
          btnDisabled={!textInput.trim()}
          btnHandler={addTodoHandler}
          btnName={CONSTANTS.ADD_BTN_NAME}
        />
      </div>
    </div>
  )
}
