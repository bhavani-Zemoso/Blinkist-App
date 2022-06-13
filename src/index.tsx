import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EntepreneurshipPage } from './components/pages/EntrepreneurshipPage/EntrepreneurshipPage';
import { BookDetailsViewPage } from './components/pages/BookDetailsViewPage/BookDetailsViewPage';
import { ExtendedNav } from './components/molecules/ExtendedNav/ExtendedNav';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-8jqgrb-t.us.auth0.com"
      clientId="9qCpxtxNQvzxFDul1jtqgr0tP6GehsIv"
      redirectUri={window.location.origin}>
      <BrowserRouter>
        <Routes>
        {/*  <App /> */}
          <Route path="/" element={<App />} />
          <Route path="/EntrepreneurshipPage" element={<EntepreneurshipPage />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
          <Route path="/BookDetailsViewPage/:bookId" element={<BookDetailsViewPage />} />
          <Route path="/extendedNav" element={<ExtendedNav />} />
          <Route path="/:value" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
