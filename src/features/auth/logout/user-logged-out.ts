import * as api from '../../../shared/api';
import { createTypedAsyncThunk } from '../../../shared/lib/create-typed-asynk-thunk';
import { userStateCleared } from '../../../entities/user';

export const userLoggedOut = createTypedAsyncThunk(
  'auth/userLoggedOut',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      await api.logout();
      dispatch(userStateCleared());
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
