import { AuthProvider } from './auth-provider';
import { RouterProvider } from './router-provider';
import { StoreProvider } from './store-provider';

type Prop = {
  children: JSX.Element;
};

export function ComponentWithProviders({ children }: Prop) {
  return (
    <StoreProvider>
      <RouterProvider>
        <AuthProvider>{children}</AuthProvider>
      </RouterProvider>
    </StoreProvider>
  );
}
