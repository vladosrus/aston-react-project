import { Provider } from 'react-redux';
import { store } from '../store';

type Prop = {
  children: JSX.Element;
};

export function StoreProvider({ children }: Prop) {
  return <Provider store={store}>{children}</Provider>;
}
