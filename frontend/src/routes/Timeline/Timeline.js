import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar.js';
import Explorebar from '../../components/Explorebar.js';

export default function Timeline() {
  return (
    <div className="flex justify-center relative">
      <div className="fixed left-20 h-full">
        <Navbar />
      </div>
      
      <div className="w-[37rem]">
        <Outlet />
      </div>
      
      <div className="fixed right-20 h-full">
        <Explorebar />
      </div>
    </div>
  );
}