import * as api from '../../shared/api';
import { createTypedAsyncThunk } from '../../shared/lib/create-typed-asynk-thunk';
import type { RootUser } from '../../entities/user/model/slice';

export const userDbProfileCreated = createTypedAsyncThunk(
  'user/userDbProfileCreated',
  async (data: RootUser<string>, { rejectWithValue }) => {
    try {
      await api.createUserDbProfile(data);

      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
