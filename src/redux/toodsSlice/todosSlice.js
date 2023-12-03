import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  items: [],
};

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, { payload }) {
      state.items.push(payload);
      //   state.todos = [...state.todos, action.payload];
      //   return { ...state, todos: [...state.todos, action.payload] };
    },
    onDeleteTodo(state, { payload }) {
      state.items = state.items.filter(todo => todo.id !== payload);
    },
  },
});

const persisted = persistReducer(
  { key: 'todos', storage, whitelist: ['todos'] },
  slice.reducer
);

export default persisted;
export const { addTodo, onDeleteTodo } = slice.actions;
