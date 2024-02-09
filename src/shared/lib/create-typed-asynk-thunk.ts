import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from './use-typed-selector';
import type { Dispatch } from './use-typed-dispatch';

export type ThunkApiConfig = {
  state: RootState;
  dispatch: Dispatch;
  rejectValue: string;
};

export const createTypedAsyncThunk =
  createAsyncThunk.withTypes<ThunkApiConfig>();
