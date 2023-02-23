import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; // react-bootstrap configuration

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Auth from './components/Auth';
import ProtectedRoute from './util/ProtectedRoute';
import Home from './portal/home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={'/'}>
    <Routes>
        <Route path='/' element={<Login />}>
            <Route path='/app' element={<Login />} />
        </Route>
        <Route path="/app" element={<App />}>
            <Route path='/app' element={
                <ProtectedRoute>
                    <Home />
                </ProtectedRoute>
            } />
        </Route>
    </Routes>
</BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
