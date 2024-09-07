import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import IndexPage from './routes/IndexPage.js';
import HomePage from './routes/HomePage.js';
import ErrorPage from './routes/ErrorPage.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
	errorElement: <ErrorPage />
  },
  {
    path: 'home',
    element: <HomePage />
  }
]);

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <RouterProvider router={router}>
		<App />
    </RouterProvider>
  );
} else {
  console.error('No element with ID "app" found in the DOM.');
}