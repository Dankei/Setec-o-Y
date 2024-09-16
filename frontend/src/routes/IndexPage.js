import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import StartScreen from "../pages/Index/StartScreen.js";
import SignUpScreen from "../pages/Index/SignUpScreen.js";
import LoginScreen from "../pages/Index/LoginScreen.js";
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