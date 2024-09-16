import React from 'react'


export default function Explorebar() {

    return (
        <div className="flex h-screen">
      <div className="flex flex-col text-white w-80 bg-slate-950 ps-2">
        
        
        <nav className="flex-1 px-2 py-4 space-y-2">
        
        <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar"
              className="w-full px-4 py-2 text-white placeholder-gray-400 bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="absolute w-5 h-5 text-gray-400 top-2 right-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        
        </nav>
      </div>
      
    </div>
    )
}