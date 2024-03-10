import { combineReducers } from '@reduxjs/toolkit'
import Slice from './Slice'

export const Reducer = combineReducers({ Todos: Slice })
