import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import VerificationPopup from '../../components/VerificationPopup.js';

function SignUpScreen({ onLoginClick }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
    });
    const [error, setError] = useState('');
    const [focusedInput, setFocusedInput] = useState('');
    const [showVerification, setShowVerification] = useState(false);
    const [userId, setUserId] = useState(null);
    const [verificationError, setVerificationError] = useState('');

    const handleFocus = (field) => setFocusedInput(field);
    const handleBlur = () => setFocusedInput('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        const { username, email, password, repeatPassword } = formData;

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
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                setUserId(data.id);
                setShowVerification(true);
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
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token, userID: userId }),
            });

            if (response.ok) {
                localStorage.setItem('user', JSON.stringify({ id: userId, ...formData }));
                navigate('/home');
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
            <form onSubmit={handleSignUp} className="flex flex-col gap-10">
                <div className="flex flex-col w-full gap-10 md:flex-row">
                    <div className="relative flex flex-col">
                        <input
                            type="text"
                            id="username"
                            value={formData.username}
                            onChange={handleChange}
                            onFocus={() => handleFocus('username')}
                            onBlur={handleBlur}
                            className="border-b-[3px] bg-transparent w-full px-5 py-1 text-2xl focus:outline-none transition duration-300 transform focus:scale-105 focus:border-white"
                        />
                        <label
                            htmlFor="username"
                            className={`absolute px-5 text-2xl transition-all ${focusedInput === 'username' || formData.username ? 'translate-y-[-100%] opacity-0' : 'translate-y-0 opacity-100'}`}
                        >
                            Nome de Usuário
                        </label>
                    </div>
                    <div className="relative flex flex-col">
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => handleFocus('email')}
                            onBlur={handleBlur}
                            className="border-b-[3px] bg-transparent w-full px-5 py-1 text-2xl focus:outline-none transition duration-300 transform focus:scale-105 focus:border-white"
                        />
                        <label
                            htmlFor="email"
                            className={`absolute px-5 text-2xl transition-all ${focusedInput === 'email' || formData.email ? 'translate-y-[-100%] opacity-0' : 'translate-y-0 opacity-100'}`}
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
                            value={formData.password}
                            onChange={handleChange}
                            onFocus={() => handleFocus('password')}
                            onBlur={handleBlur}
                            className="border-b-[3px] bg-transparent w-full px-5 py-1 text-2xl focus:outline-none transition duration-300 transform focus:scale-105 focus:border-white"
                        />
                        <label
                            htmlFor="password"
                            className={`absolute px-5 text-2xl transition-all ${focusedInput === 'password' || formData.password ? 'translate-y-[-100%] opacity-0' : 'translate-y-0 opacity-100'}`}
                        >
                            Senha
                        </label>
                    </div>
                    <div className="relative flex flex-col">
                        <input
                            type="password"
                            id="repeatPassword"
                            value={formData.repeatPassword}
                            onChange={handleChange}
                            onFocus={() => handleFocus('repeatPassword')}
                            onBlur={handleBlur}
                            className="border-b-[3px] bg-transparent w-full px-5 py-1 text-2xl focus:outline-none transition duration-300 transform focus:scale-105 focus:border-white"
                        />
                        <label
                            htmlFor="repeatPassword"
                            className={`absolute px-5 text-2xl transition-all ${focusedInput === 'repeatPassword' || formData.repeatPassword ? 'translate-y-[-100%] opacity-0' : 'translate-y-0 opacity-100'}`}
                        >
                            Confirme a Senha
                        </label>
                    </div>
                </div>
                <button className="border-[3px] w-fit mx-auto px-14 py-5 rounded-full text-2xl transition-all hover:bg-white hover:text-black font-bold" type="submit">
                    Criar conta
                </button>
            </form>
            <div className="flex flex-col w-full gap-10">
                <hr className="sm:mx-20 mx-14 lg:mx-28" />
                <h2 className="text-2xl font-light text-center 2xl:text-3xl">Já possui uma conta?</h2>
                <button className="border-[3px] w-fit mx-auto px-14 py-5 rounded-full text-2xl transition-all hover:bg-white hover:text-black font-bold" onClick={onLoginClick}>
                    Fazer Login
                </button>
            </div>
            {showVerification && <VerificationPopup onVerify={handleVerifyCode} error={verificationError} />}
        </motion.div>
    );
}

export default SignUpScreen;
