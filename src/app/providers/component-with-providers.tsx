import { AuthProvider } from './auth-provider';
import { RouterProvider } from './router-provider';
import { StoreProvider } from './store-provider';

type Props = {
  children: JSX.Element;
};

export const ComponentWithProviders = (props: Props) => {
  return (
    <StoreProvider>
      <RouterProvider>
        <AuthProvider>{props.children}</AuthProvider>
      </RouterProvider>
    </StoreProvider>
  );
};
