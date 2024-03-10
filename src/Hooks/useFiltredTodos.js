import { useState } from 'react'

export const useFiltredTodos = (todos) => {
  const [selectValue, setSelectValue] = useState('DEFAULT')
  const onChangeSelectHandler = (e) => {
    setSelectValue(e.target.value)
  }
  const todosArr = Object.keys(todos)
    .map((id) => {
      return { ...todos[id], id }
    })
    .filter((todo) => {
      switch (selectValue) {
        case 'COMPLETE':
          if (todo.complete === true) return todo
          break
        case 'NOT_COMPLITE':
          if (todo.complete === false) return todo
          break
        default:
          return todo
      }
    })
  return [todosArr, selectValue, onChangeSelectHandler]
}
