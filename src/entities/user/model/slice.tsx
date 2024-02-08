import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../shared/lib/use-typed-selector';
import { userDbProfileCreated } from '../../../features/user/user-db-profile-created';
import { userDbProfileSynchronized } from '../../../features/user/user-db-profile-synchronized';
import { addedToFavorites } from '../../../features/favorites/model/added-to-favorites';
import { deletedFromFavorites } from '../../../features/favorites/model/deleted-from-favorites';
import { addedToHistory } from '../../../features/history/model/added-to-history';
import { deletedOneQueryFromHistory } from '../../../features/history/model/deleted-one-query-from-history';
import { deletedAllQueriesFromHistory } from '../../../features/history/model/deleted-all-queries-from-history';

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
    },
    addedToHistory: {
      isLoading: false,
      error: null
    },
    deletedOneQueryFromHistory: {
      isLoading: false,
      error: null
    },
    deletedAllQueriesFromHistory: {
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
    //Создание профиля пользователя в базе данных
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

    //Синхронизация данных пользователя
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

    //Добавление в список избранных
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

    //Удаление из списка избранных
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

    //Добавление в историю запросов
    builder.addCase(addedToHistory.pending, (state) => {
      state.asyncMethodsStatuses.addedToHistory.isLoading = true;
      state.asyncMethodsStatuses.addedToHistory.error = null;
    });
    builder.addCase(addedToHistory.rejected, (state, action) => {
      state.asyncMethodsStatuses.addedToHistory.isLoading = false;
      state.asyncMethodsStatuses.addedToHistory.error = action.payload;
    });
    builder.addCase(addedToHistory.fulfilled, (state) => {
      state.asyncMethodsStatuses.addedToHistory.isLoading = false;
    });

    //Удаление одного запроса из истории запросов
    builder.addCase(deletedOneQueryFromHistory.pending, (state) => {
      state.asyncMethodsStatuses.deletedOneQueryFromHistory.isLoading = true;
      state.asyncMethodsStatuses.deletedOneQueryFromHistory.error = null;
    });
    builder.addCase(deletedOneQueryFromHistory.rejected, (state, action) => {
      state.asyncMethodsStatuses.deletedOneQueryFromHistory.isLoading = false;
      state.asyncMethodsStatuses.deletedOneQueryFromHistory.error =
        action.payload;
    });
    builder.addCase(deletedOneQueryFromHistory.fulfilled, (state) => {
      state.asyncMethodsStatuses.deletedOneQueryFromHistory.isLoading = false;
    });

    //Удаление всех запросов из истории
    builder.addCase(deletedAllQueriesFromHistory.pending, (state) => {
      state.asyncMethodsStatuses.deletedAllQueriesFromHistory.isLoading = true;
      state.asyncMethodsStatuses.deletedAllQueriesFromHistory.error = null;
    });
    builder.addCase(deletedAllQueriesFromHistory.rejected, (state, action) => {
      state.asyncMethodsStatuses.deletedAllQueriesFromHistory.isLoading = false;
      state.asyncMethodsStatuses.deletedAllQueriesFromHistory.error =
        action.payload;
    });
    builder.addCase(deletedAllQueriesFromHistory.fulfilled, (state) => {
      state.asyncMethodsStatuses.deletedAllQueriesFromHistory.isLoading = false;
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
export const historySelector = createSelector(
  (state: RootState) => state.user.history,
  (state: RootState) =>
    state.user.asyncMethodsStatuses.userDbProfileSynchronized.isLoading,
  (history, isHistoryLoading) => ({
    history,
    isHistoryLoading
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
    addedToHistory: {
      isLoading: boolean;
      error: string | null | undefined;
    };
    deletedOneQueryFromHistory: {
      isLoading: boolean;
      error: string | null | undefined;
    };
    deletedAllQueriesFromHistory: {
      isLoading: boolean;
      error: string | null | undefined;
    };
  };
};

export type RootUser<T> = {
  email: T;
  id: T;
};
