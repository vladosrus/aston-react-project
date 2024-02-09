import { FC } from 'react';
import { AuthProvider } from './auth-provider';
import { RouterProvider } from './router-provider';
import { StoreProvider } from './store-provider';

type Props = {
  children: JSX.Element;
};

export const ComponentWithProviders: FC<Props> = (props) => {
  return (
    <StoreProvider>
      <RouterProvider>
        <AuthProvider>{props.children}</AuthProvider>
      </RouterProvider>
    </StoreProvider>
  );
};
