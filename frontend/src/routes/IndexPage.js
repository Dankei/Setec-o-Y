import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import StartScreen from "../pages/StartScreen.js";
import SignUpScreen from "../pages/SignUpScreen.js";
import LoginScreen from "../pages/LoginScreen.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function IndexPage() {
    const [currentScreen, setCurrentScreen] = useState('start');
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const renderScreen = () => {
        if (currentScreen === 'signup') {
            return <SignUpScreen onLoginClick={() => setCurrentScreen('login')} />;
        } else if (currentScreen === 'login') {
            return <LoginScreen
                onSignUpClick={() => setCurrentScreen('signup')}
                onLoginClick={() => {
                    axios.post('http://localhost:3001/login', {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: email,
                            password: password,
                        })
                    })
                        .then((response) => {
                            if (response.status === 200) {
                                setCurrentScreen('timeline');
                            }
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });
                }}
            />;
        }
        else {
            return <StartScreen onSignUpClick={() => setCurrentScreen('signup')} onLoginClick={() => setCurrentScreen('login')} />;
        }
    };

    if (currentScreen === 'timeline') {
        navigate('/home');
    }
    else {
        return (
            <div className="flex h-screen">
                <div className="relative flex-1 hidden overflow-hidden md:block">
                    <img src="/assets/images/bg.png" alt="" className="object-cover h-full " />
                    <div className="absolute bottom-0 left-0 mb-12 ml-12"><img src="/assets/images/logo.svg" alt="" /></div>
                </div>
                <div className="relative flex-[2]">
                    <AnimatePresence mode="wait">
                        {renderScreen()}
                    </AnimatePresence>
                </div>
            </div>
        );
    }
}

export default IndexPage;