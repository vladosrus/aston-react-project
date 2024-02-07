import { createSelector, createSlice } from '@reduxjs/toolkit';
import { userDbProfileCreated } from '../../../features/user/user-db-profile-created';
import { userDbProfileSynchronized } from '../../../features/user/user-db-profile-synchronized';
import { addedToFavorites } from '../../../features/favorites/model/added-to-favorites';
import { deletedFromFavorites } from '../../../features/favorites/model/deleted-from-favorites';
import { RootState } from '../../../shared/lib/use-typed-selector';

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
    },
    addedToFavorites: {
      isLoading: false,
      error: null
    },
    deletedFromFavorites: {
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
    builder.addCase(addedToFavorites.pending, (state) => {
      state.asyncMethodsStatuses.addedToFavorites.isLoading = true;
      state.asyncMethodsStatuses.addedToFavorites.error = null;
    });
    builder.addCase(addedToFavorites.rejected, (state, action) => {
      state.asyncMethodsStatuses.addedToFavorites.isLoading = false;
      state.asyncMethodsStatuses.addedToFavorites.error = action.payload;
    });
    builder.addCase(addedToFavorites.fulfilled, (state) => {
      state.asyncMethodsStatuses.addedToFavorites.isLoading = false;
    });
    builder.addCase(deletedFromFavorites.pending, (state) => {
      state.asyncMethodsStatuses.deletedFromFavorites.isLoading = true;
      state.asyncMethodsStatuses.deletedFromFavorites.error = null;
    });
    builder.addCase(deletedFromFavorites.rejected, (state, action) => {
      state.asyncMethodsStatuses.deletedFromFavorites.isLoading = false;
      state.asyncMethodsStatuses.deletedFromFavorites.error = action.payload;
    });
    builder.addCase(deletedFromFavorites.fulfilled, (state) => {
      state.asyncMethodsStatuses.deletedFromFavorites.isLoading = false;
    });
  }
});

export const { userStateCleared } = userSlice.actions;
export const userReducer = userSlice.reducer;
export const favoritesSelector = createSelector(
  (state: RootState) => state.user.favorites,
  (state: RootState) =>
    state.user.asyncMethodsStatuses.deletedFromFavorites.isLoading,
  (state: RootState) =>
    state.user.asyncMethodsStatuses.addedToFavorites.isLoading,
  (state: RootState) =>
    state.user.asyncMethodsStatuses.userDbProfileSynchronized.isLoading,
  (favorites, isDeletedLoading, isAddedLoading, isFavoritesLoading) => ({
    favorites,
    isDeletedLoading,
    isAddedLoading,
    isFavoritesLoading
  })
);

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
    addedToFavorites: {
      isLoading: boolean;
      error: string | null | undefined;
    };
    deletedFromFavorites: {
      isLoading: boolean;
      error: string | null | undefined;
    };
  };
};

export type RootUser<T> = {
  email: T;
  id: T;
};
