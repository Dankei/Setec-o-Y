import React from 'react'
import ButtonCommon from './ButtonCommon.js'
import NewYeetPop from './NewYeetPop.js'
import PopUp from './PopUp.js';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [open, setOpen] = React.useState(false);
    const user = JSON.parse(localStorage.getItem('user'))
    return (
        <div className="flex h-screen w-fit">
            <div className="flex flex-col text-white w-fit lg:ps-20 bg-slate-950">
                <img className="p-4 size-20" src="/assets/images/Logo.svg" alt="" />
                <nav className="flex-1 px-2 py-4">
                    <div className="space-y-2">
                        <Link to="/home" className="flex items-center px-4 py-2 space-x-4 transition-all rounded hover:bg-gray-700">
                            <img src="/assets/images/home.png" alt="" />
                            <p className="text-xl font-medium">Início</p>
                        </Link>
                        <Link to="/home" className="flex items-center px-4 py-2 space-x-4 transition-all rounded hover:bg-gray-700 ">
                            <img src="/assets/images/bell.png" alt="" />
                            <p className="text-xl font-medium">Notificações</p>
                        </Link>
                        <Link to={user.username} className="flex items-center px-4 py-2 space-x-4 transition-all rounded hover:bg-gray-700">
                            <img src="/assets/images/user-icon.jpg" className="transition-all rounded-full size-9" alt="" />
                            <p className="text-xl font-medium">Perfil</p>
                        </Link>

                        <a href="/settings" className="flex px-4 py-2 transition-all rounded hover:bg-gray-700">
                            <div className="flex items-center space-x-4 ">
                                <img src="/assets/images/settings.png" alt="" />
                                <p className="text-xl font-medium">Configurações</p>
                            </div>
                        </a>
                    </div>

                    <div className="flex justify-center mt-10">
                        <ButtonCommon text="Novo Yeet" onClick={() => setOpen(true)} />
                    </div>

                    <PopUp open={open} onClose={() => setOpen(false)}>
                        <NewYeetPop />
                    </PopUp>

                </nav>
            </div >

        </div >
    )
}