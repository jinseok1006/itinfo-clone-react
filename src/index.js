import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Home from './routes/Home/Home';
import Notice from './routes/Notice/Notice';
import About from './routes/About/About';

import './reset.css';
import './global.css';

import NotFound from './components/NotFound';

import { ScrollToTop } from './utils';
import { getScreenHeight } from './utils';

window.addEventListener('resize', getScreenHeight);
getScreenHeight();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="notice" element={<Notice />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
