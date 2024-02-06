import * as api from '../../../shared/api';
import { createTypedAsyncThunk } from '../../../shared/lib/create-typed-asynk-thunk';
import { userDbProfileCreated } from '../../user/user-db-profile-created';
import type { Inputs } from '../../../shared/api/firebase-api';

export const userRegistered = createTypedAsyncThunk(
  'auth/userRegistered',
  async (data: Inputs, { dispatch, rejectWithValue }) => {
    try {
      const result = await api.registration(data);

      if (result.user.email) {
        const transformResult = {
          email: result.user.email,
          id: result.user.uid
        };
        dispatch(userDbProfileCreated(transformResult));

        return transformResult;
      }
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
