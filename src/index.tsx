import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EntepreneurshipPage } from './components/pages/EntrepreneurshipPage/EntrepreneurshipPage';
import { BookDetailsViewPage } from './components/pages/BookDetailsViewPage/BookDetailsViewPage';
import { ExtendedNav } from './components/molecules/ExtendedNav/ExtendedNav';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
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
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
