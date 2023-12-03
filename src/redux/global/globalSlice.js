import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const { createSlice } = require('@reduxjs/toolkit');

const slice = createSlice({
  name: 'global',
  initialState: {
    themeTitle: 'light',
  },
  reducers: {
    toggleTheme: state => {
      state.themeTitle = state.themeTitle === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = slice.actions;

const persisted = persistReducer(
  { key: 'global', storage, whitelist: ['themeTitle'] },
  slice.reducer
);

export default persisted;
