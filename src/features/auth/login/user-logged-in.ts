import * as api from '../../../shared/api';
import { createTypedAsyncThunk } from '../../../shared/lib/create-typed-asynk-thunk';
import { userDbProfileSynchronized } from '../../user/user-db-profile-synchronized';
import type { Inputs } from '../../../shared/api/firebase-api';

export const userLoggedIn = createTypedAsyncThunk(
  'auth/userLoggedIn',
  async ({ email, password }: Inputs, { dispatch, rejectWithValue }) => {
    try {
      await api.login({ email, password });
      dispatch(userDbProfileSynchronized(email));
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
