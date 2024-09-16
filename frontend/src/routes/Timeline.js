import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar.js';
import Explorebar from '../components/Explorebar.js';

export default function Timeline() {
  return (
    <div className="flex w-full">
      <div className="relative flex-1">
        <div className="fixed h-full mx-auto">
          <Navbar />
        </div>
      </div>
      <div className="flex-1">
        <div className="w-[37rem]">
          <Outlet />
        </div>
      </div>
      <div className="relative flex-1">
        <div className="fixed h-full mx-auto ">
          <Explorebar />
        </div></div>
    </div>
  );
}