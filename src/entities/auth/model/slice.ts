import { createSelector, createSlice } from '@reduxjs/toolkit';
import { userRegistered } from '../../../features/auth/registration/user-registered';
import { RootState } from '../../../shared/lib/use-typed-selector';
import { userLoggedOut } from '../../../features/auth/logout/user-logged-out';
import { userLoggedIn } from '../../../features/auth/login/user-logged-in';

type State = {
  userRegistered: { isLoading: boolean; error: string | null | undefined };
  userLoggedIn: { isLoading: boolean; error: string | null | undefined };
  userLoggedOut: { isLoading: boolean; error: string | null | undefined };
};

const initialState: State = {
  userRegistered: { isLoading: false, error: null },
  userLoggedIn: { isLoading: false, error: null },
  userLoggedOut: { isLoading: false, error: null }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userRegistered.pending, (state) => {
      state.userRegistered.isLoading = true;
      state.userRegistered.error = null;
    });
    builder.addCase(userRegistered.fulfilled, (state) => {
      state.userRegistered.isLoading = false;
      state.userRegistered.error = null;
    });
    builder.addCase(userRegistered.rejected, (state, action) => {
      state.userRegistered.isLoading = false;
      state.userRegistered.error = action.payload;
    });
    builder.addCase(userLoggedIn.pending, (state) => {
      state.userLoggedIn.isLoading = true;
      state.userLoggedIn.error = null;
    });
    builder.addCase(userLoggedIn.fulfilled, (state) => {
      state.userLoggedIn.isLoading = false;
      state.userLoggedIn.error = null;
    });
    builder.addCase(userLoggedIn.rejected, (state, action) => {
      state.userLoggedIn.isLoading = false;
      state.userLoggedIn.error = action.payload;
    });
    builder.addCase(userLoggedOut.pending, (state) => {
      state.userLoggedOut.isLoading = true;
      state.userLoggedOut.error = null;
    });
    builder.addCase(userLoggedOut.fulfilled, (state) => {
      state.userLoggedOut.isLoading = false;
      state.userLoggedOut.error = null;
    });
    builder.addCase(userLoggedOut.rejected, (state, action) => {
      state.userLoggedOut.isLoading = false;
      state.userLoggedOut.error = action.payload;
    });
  }
});

export const authReducer = authSlice.reducer;
export const loginInfoSelector = createSelector(
  (state: RootState) => state.auth.userLoggedIn.isLoading,
  (state: RootState) => state.auth.userLoggedIn.error,
  (isLoading, error) => ({
    isLoading,
    error
  })
);
export const registrationInfoSelector = createSelector(
  (state: RootState) => state.auth.userRegistered.isLoading,
  (state: RootState) => state.auth.userRegistered.error,
  (isLoading, error) => ({
    isLoading,
    error
  })
);
