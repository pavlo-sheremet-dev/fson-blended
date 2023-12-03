import { configureStore, createSlice } from '@reduxjs/toolkit';
const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  initialState,
  name: 'todos',
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
      //   state.todos = [...state.todos, action.payload];
      //   return { ...state, todos: [...state.todos, action.payload] };
    },
    onDeleteTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

const todosReducer = todoSlice.reducer;
export const { addTodo, onDeleteTodo } = todoSlice.actions;
export const store = configureStore({ reducer: todosReducer });
