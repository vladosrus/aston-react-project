import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Preloader } from '../../shared/ui/preloader/preloader';

type Prop = {
  children: JSX.Element;
};

export function RouterProvider({ children }: Prop) {
  return (
    <BrowserRouter>
      <Suspense fallback={<Preloader />}>{children}</Suspense>
    </BrowserRouter>
  );
}
