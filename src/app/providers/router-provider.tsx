import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PagePreloader } from '../../shared/ui/page-preloader/page-preloader';

type Prop = {
  children: JSX.Element;
};

export function RouterProvider({ children }: Prop) {
  return (
    <BrowserRouter>
      <Suspense fallback={<PagePreloader />}>{children}</Suspense>
    </BrowserRouter>
  );
}
