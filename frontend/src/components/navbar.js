import React from 'react'


export default function Navbar() {

    return (
        <div className="flex h-screen border-solid border-gray-600 border-e-2">
        <div className="w-80 ps-20 bg-slate-950 text-white flex flex-col">
        
        <div className="p-4 size-20"><img src="/assets/images/Logo.svg" alt="" /></div>
        
        <nav className="flex-1 px-2 py-4 space-y-2">
        
        <a href="/home" className="flex px-4 py-2 rounded hover:bg-gray-700">
            <div className="flex items-center space-x-4  ">
                <img src="/assets/images/home.png" alt="" />
                <p>Início</p>
            </div>
        </a>

        <a href="/home" className="flex px-4 py-2 rounded hover:bg-gray-700">
            <div className="flex items-center space-x-4  ">
                <img src="/assets/images/bell.png" alt="" />
                <p>Notificações</p>
            </div>
        </a>

        <a href="/profile" className="flex px-4 py-2 rounded hover:bg-gray-700">
            <div className="flex items-center space-x-4 ">
                <img src="/assets/images/user-icon.jpg" className="size-9 rounded-full" alt="" />
                <p>Perfil</p>
            </div>
        </a>
          
        <a href="/settings" className="flex px-4 py-2 rounded hover:bg-gray-700">
            <div className="flex items-center space-x-4  ">
                <img src="/assets/images/settings.png" alt="" />
                <p>Configurações</p>
            </div>
        </a>
          
        </nav>
      </div>
      
    </div>
    )
}