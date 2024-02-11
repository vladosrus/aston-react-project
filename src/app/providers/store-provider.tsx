import { Provider } from 'react-redux';
import { store } from '../store';

type Props = {
  children: JSX.Element;
};

export const StoreProvider = (props: Props) => {
  return <Provider store={store}>{props.children}</Provider>;
};
