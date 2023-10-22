import { configureStore } from '@reduxjs/toolkit';
import { todosSlice } from './todos/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'todos',
  storage,
};

// export const store = configureStore({ reducer: todosSlice.reducer });
export const store = configureStore({
  reducer: {
    todos: persistReducer(persistConfig, todosSlice.reducer ),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
