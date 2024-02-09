import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../shared/lib/use-typed-selector';
import { themeLoaded } from '../../../features/theme/model/theme-loaded';

type State = {
  theme: 'light' | 'dark';
  isLoading: boolean;
};

const initialState: State = {
  theme: 'light',
  isLoading: false
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    themeChanged(state, action) {
      state.theme = action.payload;
    }
  },
  extraReducers(builder) {
    builder.addCase(themeLoaded.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(themeLoaded.fulfilled, (state, action) => {
      if (action.payload === 'light' || action.payload === 'dark') {
        state.theme = action.payload;
      }
      state.isLoading = false;
    });
  }
});

export const { themeChanged } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;

export const themeSelector = createSelector(
  (state: RootState) => state.theme.theme,
  (state: RootState) => state.theme.isLoading,
  (theme, isLoading) => ({
    theme,
    isLoading
  })
);
