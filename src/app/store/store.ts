import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../../entities/user';
import { unsplashApi } from '../../shared/api/unsplash-api';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [unsplashApi.reducerPath]: unsplashApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(unsplashApi.middleware)
});
