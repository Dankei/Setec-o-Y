import React from 'react'
import ButtonCommon from './ButtonCommon.js'

export default function Navbar() {

    return (
        <div className="flex h-screen">
        <div className="w-80 ps-20 bg-slate-950 text-white flex flex-col">
        
        <div className="p-4 size-20"><img src="/assets/images/Logo.svg" alt="" /></div>
        
        <nav className="flex-1 px-2 py-4">

        <div className="space-y-2">
            <a href="/home" className="flex px-4 py-2 rounded hover:bg-gray-700 transition-all">
                <div className="flex items-center space-x-4  ">
                    <img src="/assets/images/home.png" alt="" />
                    <p className="font-medium text-xl">Início</p>
                </div>
            </a>

            <a href="/home" className="flex px-4 py-2 rounded hover:bg-gray-700 transition-all">
                <div className="flex items-center space-x-4  ">
                    <img src="/assets/images/bell.png" alt="" />
                    <p className="font-medium text-xl">Notificações</p>
                </div>
            </a>

            <a href="/profile" className="flex px-4 py-2 rounded hover:bg-gray-700 transition-all">
                <div className="flex items-center space-x-4 ">
                    <img src="/assets/images/user-icon.jpg" className="size-9 rounded-full transition-all" alt="" />
                    <p className="font-medium text-xl">Perfil</p>
                </div>
            </a>
            
            <a href="/settings" className="flex px-4 py-2 rounded hover:bg-gray-700 transition-all">
                <div className="flex items-center space-x-4  ">
                    <img src="/assets/images/settings.png" alt="" />
                    <p className="font-medium text-xl">Configurações</p>
                </div>
            </a>
        </div>
        
        

        <div className="flex justify-center mt-10">
            <ButtonCommon text="Novo Yeet"/>
        </div>
        
          
        </nav>
      </div>
      
    </div>
    )
}