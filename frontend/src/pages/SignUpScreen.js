import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Adicione isso
import VerificationPopup from '../components/VerificationPopup.js';

function SignUpScreen({ onLoginClick }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState('');
    const [focusedInput, setFocusedInput] = useState('');
    const [showVerification, setShowVerification] = useState(false);
    const [userId, setUserId] = useState(null);
    const [verificationError, setVerificationError] = useState('');
    const handleFocus = (field) => {
        setFocusedInput(field);
    };

    const handleBlur = () => {
        setFocusedInput('');
    };


    const navigate = useNavigate(); // Adicione isso

    const handleSignUp = async () => {
        // Validações de e-mail e senha
        if (!email.includes('@')) {
            setError('E-mail inválido!');
            return;
        }

        if (password !== repeatPassword) {
            setError('As senhas não são iguais!');
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                setUserId(data.id);
                setShowVerification(true); // Exibe o pop-up de verificação
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Erro ao criar conta. Tente novamente.');
            }
        } catch (err) {
            setError('Erro ao conectar com o servidor.');
        }
    };

    const handleVerifyCode = async (token) => {
        try {
            const response = await fetch('http://localhost:3001/api/users/confirmEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token: token,
                    userID: userId,
                }),
            });

            if (response.ok) {
                // Login automático se o código for válido
                navigate('/home'); // Agora o navigate vai funcionar
            } else {
                const errorData = await response.json();
                setVerificationError(errorData.message || 'Erro ao verificar o código.');
            }
        } catch (err) {
            setVerificationError('Erro ao conectar com o servidor.');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center max-h-full gap-10 text-white"
        >
            <h1 className="text-4xl font-black 2xl:text-7xl lg:text-5xl">Criar conta</h1>
            {error && <p className="text-red-500">{error}</p>}
            <form className="flex flex-col gap-10">
                <div className="flex flex-col flex-1 w-full gap-10 md:flex-row">
                    <div className="relative flex flex-col">
                        <input
                            type="text"
                            id="nome"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onFocus={() => handleFocus('username')}
                            onBlur={handleBlur}
                            className="border-b-[3px] bg-transparent w-full px-5 py-1 text-2xl focus:outline-none transition duration-300 ease-in-out transform focus:scale-105 focus:border-white"
                        />
                        <label
                            htmlFor="nome"
                            className={`absolute px-5 text-2xl font-thin transition-all duration-300 ease-in-out transform ${focusedInput === 'username' || username
                                ? 'translate-y-[-100%] opacity-0'
                                : 'translate-y-0 opacity-100'
                                }`}
                        >
                            Nome de Usuário
                        </label>
                    </div>
                    <div className="relative flex flex-col">
                        <input
                            type="email"
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
                </div>
                <div className="flex flex-col w-full gap-10 md:flex-row">
                    <div className="relative flex flex-col">
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
                    <div className="relative flex flex-col">
                        <input
                            type="password"
                            id="repeatPassword"
                            value={repeatPassword}
                            onChange={(e) => setRepeatPassword(e.target.value)}
                            onFocus={() => handleFocus('repeatPassword')}
                            onBlur={handleBlur}
                            className="border-b-[3px] bg-transparent w-full px-5 py-1 text-2xl focus:outline-none transition duration-300 ease-in-out transform focus:scale-105 focus:border-white"
                        />
                        <label
                            htmlFor="repeatPassword"
                            className={`absolute px-5 text-2xl font-thin transition-all duration-300 ease-in-out transform ${focusedInput === 'repeatPassword' || repeatPassword
                                ? 'translate-y-[-100%] opacity-0'
                                : 'translate-y-0 opacity-100'
                                }`}
                        >
                            Confirme a Senha
                        </label>
                    </div>
                </div>
            </form>
            <div className="flex flex-col w-full gap-10 my-5">
                <button
                    className="border-[3px] w-fit mx-auto px-14 py-5 rounded-full text-2xl transition-all hover:bg-white hover:text-black font-bold"
                    type="submit"
                    onClick={handleSignUp}
                >
                    Criar conta
                </button>
                <hr className="sm:mx-20 mx-14 lg:mx-28" />
                <h2 className="text-2xl font-light text-center 2xl:text-3xl">Já possui uma conta?</h2>
                <button
                    className="border-[3px] w-fit mx-auto px-14 py-5 rounded-full text-2xl transition-all hover:bg-white hover:text-black font-bold"
                    onClick={onLoginClick}
                >
                    Fazer Login
                </button>
            </div>
            {/* Pop-up de verificação */}
            {showVerification && (
                <VerificationPopup
                    onVerify={handleVerifyCode}
                    error={verificationError}
                />
            )}
        </motion.div>
    );
}

export default SignUpScreen;