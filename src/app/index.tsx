import { Routing } from '../pages';
import { ComponentWithProviders } from './providers';

export const App = () => {
  return (
    <ComponentWithProviders>
      <Routing />
    </ComponentWithProviders>
  );
};
