import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './index.css';
import App from './App';
import UserIndex from "./guests/user/index";
import EmployerIndex from "./guests/employer/index";
import AdminIndex from "./guests/admin/index";
// import UserHome from './guests/user/Home';
import reportWebVitals from './reportWebVitals';

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
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
    {/* <UserHome /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
