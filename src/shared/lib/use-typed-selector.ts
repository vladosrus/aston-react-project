import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { store } from '../../app/store';

export type RootState = ReturnType<typeof store.getState>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
