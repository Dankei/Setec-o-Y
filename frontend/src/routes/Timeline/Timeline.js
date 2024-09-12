import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar.js';
import Explorebar from '../../components/Explorebar.js';

export default function Timeline() {
  return (
    <div className="flex w-full h-screen">
      {/* Navbar */}
      <div className="fixed left-0 w-1/4 h-full">
        <Navbar />
      </div>

      {/* Outlet (Conteúdo principal) com scroll */}
      <div className="flex-grow h-full  mx-[25%]">
        <Outlet />
      </div>

      {/* Explorebar */}
      <div className="fixed right-0 w-1/4 h-full">
        <Explorebar />
      </div>
    </div>
  );
}
