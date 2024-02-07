import { createTypedAsyncThunk } from '../../../shared/lib/create-typed-asynk-thunk';

export const themeLoaded = createTypedAsyncThunk(
  'user/themeLoaded',
  async () => {
    const theme = localStorage.getItem('theme');
    return theme || 'light';
  }
);
