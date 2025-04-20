import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './index.css';
import App from './App';
import UserIndex from "./guests/user/index";
import EmployerIndex from "./guests/employer/index";
import AdminIndex from "./guests/admin/index";
import reportWebVitals from './reportWebVitals';
import NoPage from './components/NoPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Toaster />
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/user/*" element={<UserIndex />} />
        <Route path="/employer/*" element={<EmployerIndex />} />
        <Route path="/admin/*" element={<AdminIndex />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
