import * as api from '../../../shared/api';
import { createTypedAsyncThunk } from '../../../shared/lib/create-typed-asynk-thunk';
import { userDbProfileSynchronized } from '../../user/user-db-profile-synchronized';

export const deletedAllQueriesFromHistory = createTypedAsyncThunk(
  'user/deletedAllQueriesFromHistory',
  async (_, { getState, dispatch, rejectWithValue }) => {
    const { email } = getState().user.user;
    try {
      if (email) {
        await api.deleteAllQueriesFromHistory(email);
        dispatch(userDbProfileSynchronized(email));
      }
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
