import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import viteLogo from '/vite.svg';
import reactLogo from '../../assets/react.svg';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route
        path="/aston-react-project"
        element={
          <>
            <div>
              <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank" rel="noreferrer">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.tsx</code> and save to test HMR
              </p>
            </div>
          </>
        }
      />
    </Routes>
  );
}
