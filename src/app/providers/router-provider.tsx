import { FC, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PagePreloader } from '../../shared/ui/page-preloader/page-preloader';

type Props = {
  children: JSX.Element;
};

export const RouterProvider: FC<Props> = (props) => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PagePreloader />}>{props.children}</Suspense>
    </BrowserRouter>
  );
};
