import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar.js';
import Explorebar from '../../components/Explorebar.js';

export default function Timeline() {
  return (
    <div className="flex justify-center ">
      <Navbar />
      <div className="w-[37rem]">
        <Outlet />
      </div>
      
      <Explorebar />
      
    </div>
  );
}