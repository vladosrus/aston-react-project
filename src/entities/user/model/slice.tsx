import { createSlice } from '@reduxjs/toolkit';
import type { State } from '../../../shared/lib/use-typed-selector';

const initialState = {
  user: {
    email: null,
    isAuth: false
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userSignIn(state, action) {
      state.user.email = action.payload.email;
      state.user.isAuth = true;
    },
    userSignOut(state) {
      state.user.email = null;
      state.user.isAuth = false;
    }
  }
});

export const { userSignIn, userSignOut } = userSlice.actions;
export const userReducer = userSlice.reducer;
export const isAuthField = (state: State) => state.user.user.isAuth;
