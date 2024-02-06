import { DbData } from '../../entities/user/model/slice';
import * as api from '../../shared/api';
import { createTypedAsyncThunk } from '../../shared/lib/create-typed-asynk-thunk';

export const userDbProfileSynchronized = createTypedAsyncThunk(
  'auth/userDbProfileSynchronized',
  async (email: string, { rejectWithValue }) => {
    try {
      const res = (await api.getUserDbProfile(email)).data();
      if (res) {
        const result: DbData = {
          user: {
            email,
            id: res.id
          },
          favorites: res.favorites,
          history: res.history
        };
        return result;
      }
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
