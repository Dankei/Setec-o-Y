import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import './index.css';

const container = document.getElementById('root');
if (container) {
	const root = createRoot(container);
	root.render(<App />);
} else {
	console.error('No element with ID "app" found in the DOM.');
}