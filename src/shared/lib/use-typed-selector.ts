import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { store } from '../../app/store';

export type State = ReturnType<typeof store.getState>;

export const useTypedSelector: TypedUseSelectorHook<State> = useSelector;
