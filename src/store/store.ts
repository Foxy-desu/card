import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cards_slice.ts';

const store = configureStore({
  reducer: {
    cards: cardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
