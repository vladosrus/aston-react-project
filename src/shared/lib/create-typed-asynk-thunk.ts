import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './use-typed-selector';
import { Dispatch } from './use-typed-dispatch';

export type ThunkApiConfig = {
  state: RootState;
  dispatch: Dispatch;
  rejectValue: string;
};

export const createTypedAsyncThunk =
  createAsyncThunk.withTypes<ThunkApiConfig>();
