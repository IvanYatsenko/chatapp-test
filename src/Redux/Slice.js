import { createSlice } from '@reduxjs/toolkit'

const Slice = createSlice({
  name: 'Todos',
  initialState: {
    todos: {},
  },
  reducers: {
    addTodo(state, action) {
      const id = Date.now()
      const newTodo = {
        name: action.payload.name,
        complete: false,
      }
      state.todos[id] = newTodo
    },
    toggleTodoСomplete(state, action) {
      state.todos[action.payload].complete =
        !state.todos[action.payload].complete
    },
    removeTodo(state, action) {
      delete state.todos[action.payload]
    },
    editTodo(state, action) {
      state.todos[action.payload.id].name = action.payload.name
    },
  },
})

export default Slice.reducer
export const { addTodo, toggleTodoСomplete, removeTodo, editTodo } =
  Slice.actions
