import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer } from './component/Footer/Footer';
import './index.scss';
import { AutentificatorPage } from './page/AutentificatorPage/AutentificatorPage';
import { HomePage } from './page/HomePage/HomePage';
import { UserPage } from './page/UserPage/UserPage';
import { useState } from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const App = () => {
  const [token, setToken] = useState(null);
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route
              path="signIn"
              element={<AutentificatorPage setToken={setToken} />}
            />
            <Route path="user" element={<UserPage />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
};
root.render(<App />);
