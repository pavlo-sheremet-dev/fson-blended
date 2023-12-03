import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, { payload }) {
      state.todos.push(payload);
      //   state.todos = [...state.todos, action.payload];
      //   return { ...state, todos: [...state.todos, action.payload] };
    },
    onDeleteTodo(state, { payload }) {
      state.todos = state.todos.filter(todo => todo.id !== payload);
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, onDeleteTodo } = todoSlice.actions;
