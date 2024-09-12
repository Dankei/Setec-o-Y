import React from "react";
import Button from "../../components/ButtonModern.js";
import { useNavigate } from 'react-router-dom';

function SettingsPage() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user'); // Remove o token ou informações do usuário
        navigate('/'); // Redireciona para a página de login
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <p className="text-white">Página de configurações</p>
            <Button text="Logout" onClick={handleLogout} />
        </div>
    );
}

export default SettingsPage;
