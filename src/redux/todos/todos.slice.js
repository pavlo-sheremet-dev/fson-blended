import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addTodo, fetchTodos, deleteTodo } from './todos.operations';

const extraActions = [fetchTodos, addTodo, deleteTodo];

const getActions = type => extraActions.map(action => action[type]);

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter(todo => todo.id !== action.payload);
      })
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled);
  },
});

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = state => {
  state.isLoading = false;
};
