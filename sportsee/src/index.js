import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/index.scss';

import Frame from './layout/Frame';

// Router manager for the APP //
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frame />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
