import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    email: null,
    id: null
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userSignIn(state, action) {
      state.user.email = action.payload.email;
      state.user.id = action.payload.id;
    },
    userSignOut(state) {
      state.user.email = null;
      state.user.id = null;
    }
  }
});

export const { userSignIn, userSignOut } = userSlice.actions;
export const userReducer = userSlice.reducer;
