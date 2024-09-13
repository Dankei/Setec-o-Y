import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import para navegação

function LoginScreen({ onSignUpClick }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [focusedInput, setFocusedInput] = useState('');
    const [error, setError] = useState(''); // Para mensagens de erro
    const navigate = useNavigate(); // Hook para navegação

    const handleFocus = (field) => {
        setFocusedInput(field);
    };

    const handleBlur = () => {
        setFocusedInput('');
    };

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                // Armazenar o token ou dados do usuário
                localStorage.setItem('user', JSON.stringify(data));
                // Redirecionar para a home
                navigate('/home');
            } else {
                const errorData = await response.json();
                setError(errorData.message); // Exibe a mensagem de erro da API
            }
        } catch (err) {
            setError('Erro ao conectar com o servidor.');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-10 text-white"
        >
            <h1 className="text-4xl font-black 2xl:text-7xl lg:text-5xl">Login</h1>
            {error && <p className="text-red-500">{error}</p>}
            <form className="flex flex-col w-1/2 gap-10">
                <div className="relative flex flex-col">
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => handleFocus('email')}
                        onBlur={handleBlur}
                        className="border-b-[3px] bg-transparent w-full px-5 py-1 text-2xl focus:outline-none transition duration-300 ease-in-out transform focus:scale-105 focus:border-white"
                    />
                    <label
                        htmlFor="email"
                        className={`absolute px-5 text-2xl font-thin transition-all duration-300 ease-in-out transform ${focusedInput === 'email' || email
                            ? 'translate-y-[-100%] opacity-0'
                            : 'translate-y-0 opacity-100'
                            }`}
                    >
                        E-mail
                    </label>
                </div>
                <div className="relative flex flex-col w-full">
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={() => handleFocus('password')}
                        onBlur={handleBlur}
                        className="border-b-[3px] bg-transparent w-full px-5 py-1 text-2xl focus:outline-none transition duration-300 ease-in-out transform focus:scale-105 focus:border-white"
                    />
                    <label
                        htmlFor="password"
                        className={`absolute px-5 text-2xl font-thin transition-all duration-300 ease-in-out transform ${focusedInput === 'password' || password
                            ? 'translate-y-[-100%] opacity-0'
                            : 'translate-y-0 opacity-100'
                            }`}
                    >
                        Senha
                    </label>
                </div>
            </form>
            <div className="flex flex-col w-full gap-10 my-5">
                <button
                    className="border-[3px] w-fit mx-auto px-14 py-5 rounded-full text-2xl transition-all hover:bg-white hover:text-black font-bold"
                    onClick={handleLogin} // Chama a função de login
                >
                    Entrar
                </button>
                <hr className="sm:mx-20 mx-14 lg:mx-28" />
                <h2 className="text-2xl font-light text-center 2xl:text-3xl">Ainda não possui uma conta?</h2>
                <button
                    className="border-[3px] w-fit mx-auto px-14 py-5 rounded-full text-2xl transition-all hover:bg-white hover:text-black font-bold"
                    onClick={onSignUpClick}
                >
                    Criar conta
                </button>
            </div>
        </motion.div>
    );
}

export default LoginScreen;
