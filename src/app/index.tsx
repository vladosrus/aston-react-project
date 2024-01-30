import './App.module.css';
import { Routing } from '../pages/routing/routing';
import { ComponentWithProviders } from './providers';

export function App() {
  return (
    <ComponentWithProviders>
      <Routing />
    </ComponentWithProviders>
  );
}
