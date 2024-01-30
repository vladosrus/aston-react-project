import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

type Prop = {
  children: JSX.Element;
};

export function RouterProvider({ children }: Prop) {
  return (
    <BrowserRouter>
      <Suspense fallback={<>Идёт загрузка</>}>{children}</Suspense>
    </BrowserRouter>
  );
}
