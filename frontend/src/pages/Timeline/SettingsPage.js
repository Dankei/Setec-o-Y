import React from "react";
import Button from "../../components/ButtonModern.js";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function SettingsPage() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user'); // Remove o token ou informações do usuário
        navigate('/'); // Redireciona para a página de login
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center w-full h-full">
            <p className="text-white">Página de configurações</p>
            <Button text="Logout" onClick={handleLogout} />
        </motion.div>
    );
}

export default SettingsPage;
