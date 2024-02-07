import * as api from '../../../shared/api';
import { createTypedAsyncThunk } from '../../../shared/lib/create-typed-asynk-thunk';
import { userDbProfileSynchronized } from '../../user/user-db-profile-synchronized';

export const deletedFromFavorites = createTypedAsyncThunk(
  'user/deletedFromFavorites',
  async (photoId: string, { getState, dispatch, rejectWithValue }) => {
    const { email } = getState().user.user;
    try {
      if (email) {
        await api.deleteFromFavorites(email, photoId);
        dispatch(userDbProfileSynchronized(email));
      }
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
