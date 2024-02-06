import { createSlice } from '@reduxjs/toolkit';
import { userDbProfileCreated } from '../../../features/user/user-db-profile-created';
import { userDbProfileSynchronized } from '../../../features/user/user-db-profile-synchronized';

const initialState: State = {
  user: {
    email: null,
    id: null
  },
  favorites: [],
  history: [],
  asyncMethodsStatuses: {
    userDbProfileCreated: {
      isLoading: false,
      error: null
    },
    userDbProfileSynchronized: {
      isLoading: false,
      error: null
    }
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userStateCleared(state) {
      state.user.email = null;
      state.user.id = null;
      state.favorites = [];
      state.history = [];
    }
  },
  extraReducers(builder) {
    builder.addCase(userDbProfileCreated.pending, (state) => {
      state.asyncMethodsStatuses.userDbProfileCreated.isLoading = true;
      state.asyncMethodsStatuses.userDbProfileCreated.error = null;
    });
    builder.addCase(userDbProfileCreated.fulfilled, (state, action) => {
      if (action.payload) {
        state.user = action.payload;
      }
      state.asyncMethodsStatuses.userDbProfileCreated.isLoading = false;
    });
    builder.addCase(userDbProfileCreated.rejected, (state, action) => {
      state.asyncMethodsStatuses.userDbProfileCreated.isLoading = false;
      state.asyncMethodsStatuses.userDbProfileCreated.error = action.payload;
    });
    builder.addCase(userDbProfileSynchronized.pending, (state) => {
      state.asyncMethodsStatuses.userDbProfileSynchronized.isLoading = true;
      state.asyncMethodsStatuses.userDbProfileSynchronized.error = null;
    });
    builder.addCase(userDbProfileSynchronized.fulfilled, (state, action) => {
      if (action.payload) {
        state.user = action.payload.user;
        state.favorites = action.payload.favorites;
        state.history = action.payload.history;
      }
      state.asyncMethodsStatuses.userDbProfileSynchronized.isLoading = false;
    });
    builder.addCase(userDbProfileSynchronized.rejected, (state, action) => {
      state.asyncMethodsStatuses.userDbProfileSynchronized.isLoading = false;
      state.asyncMethodsStatuses.userDbProfileSynchronized.error =
        action.payload;
    });
  }
});

export const { userStateCleared } = userSlice.actions;
export const userReducer = userSlice.reducer;

export type DbData = {
  user: RootUser<string | null | undefined>;
  favorites: string[];
  history: string[];
};

type State = {
  user: RootUser<string | null | undefined>;
  favorites: string[];
  history: string[];
  asyncMethodsStatuses: {
    userDbProfileCreated: {
      isLoading: boolean;
      error: string | null | undefined;
    };
    userDbProfileSynchronized: {
      isLoading: boolean;
      error: string | null | undefined;
    };
  };
};

export type RootUser<T> = {
  email: T;
  id: T;
};
