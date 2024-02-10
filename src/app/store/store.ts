import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../../entities/user';
import { authReducer } from '../../entities/auth';
import { unsplashApi } from '../../shared/api/unsplash-api';
import { themeReducer } from '../../entities/theme/model/slice';
import { errorLogsMiddleware } from './middleware';

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    theme: themeReducer,
    [unsplashApi.reducerPath]: unsplashApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(unsplashApi.middleware)
      .concat(errorLogsMiddleware.middleware)
});
