import { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';

type Props = {
  children: JSX.Element;
};

export const StoreProvider: FC<Props> = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};
