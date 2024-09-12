import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar.js';
import Explorebar from '../../components/Explorebar.js';

export default function Timeline() {
  return (
    <div className="relative flex justify-center">
      <div className="fixed h-full right-20">
        <Explorebar />
      </div>

      <div className="fixed h-full left-20">
        <Navbar />
      </div>



      <div className="w-[37rem]">
        <Outlet />
      </div>


    </div>
  );
}