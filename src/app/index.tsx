import { Routing } from '../pages';
import { ComponentWithProviders } from './providers';

export function App() {
  return (
    <ComponentWithProviders>
      <Routing />
    </ComponentWithProviders>
  );
}
