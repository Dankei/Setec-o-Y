import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar.js';

export default function Timeline() {
  return (
    <div>
      <Navbar />
      <p>Placeholder for the timeline page.</p>
      <Outlet />
    </div>
  );
}