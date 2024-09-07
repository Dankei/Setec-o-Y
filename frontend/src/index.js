import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import IndexPage from './routes/IndexPage.js';
import HomePage from './routes/HomePage.js';
import ErrorPage from './routes/ErrorPage.js';
import Timeline from './routes/Timeline.js';
import SettingsPage from './routes/SettingsPage.js';
import ProfilePage from './routes/ProfilePage.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/',
    element: <Timeline />,
    children: [
      {
        path: 'home',
        element: <HomePage />
      },
      {
        path: 'settings',
        element: <SettingsPage />
      },
      {
        path: 'profile',
        element: <ProfilePage />
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