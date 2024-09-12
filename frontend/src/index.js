import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute.js';
import IndexPage from './routes/IndexPage.js';
import HomePage from './routes/Timeline/HomePage.js';
import ErrorPage from './routes/ErrorPage.js';
import Timeline from './routes/Timeline/Timeline.js';
import SettingsPage from './routes/Timeline/SettingsPage.js';
import ProfilePage from './routes/Timeline/ProfilePage.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/',
    element: <PrivateRoute ><Timeline /></PrivateRoute>,
    children: [
      {
        path: 'home',
        element: <PrivateRoute ><HomePage /></PrivateRoute>
      },
      {
        path: 'settings',
        element: <PrivateRoute ><SettingsPage /></PrivateRoute>
      },
      {
        path: ':userID',
        element: <PrivateRoute ><ProfilePage /></PrivateRoute>
      }
    ]
  }
]);

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <RouterProvider router={router} />
  );
} else {
  console.error('No element with ID "root" found in the DOM.');
}