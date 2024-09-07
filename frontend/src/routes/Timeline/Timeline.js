import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar.js';
import Explorebar from '../../components/Explorebar.js';

export default function Timeline() {
  return (
    <div className="flex space-x-2">
      <Navbar />
      <Outlet />
      <Explorebar />
      
    </div>
  );
}