import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../../entities/user';
import { authReducer } from '../../entities/auth';
import { unsplashApi } from '../../shared/api/unsplash-api';

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    [unsplashApi.reducerPath]: unsplashApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(unsplashApi.middleware)
});
