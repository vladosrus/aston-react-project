import { useDispatch } from 'react-redux';
import { store } from '../../app/store';

type Dispatch = typeof store.dispatch;

export const useTypedDispatch = () => useDispatch<Dispatch>();
