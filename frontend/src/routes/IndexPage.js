import React, { useState } from "react";
import StartScreen from "../pages/StartScreen.js";
import SignUpScreen from "../pages/SignUpScreen.js";
import LoginScreen from "../pages/LoginScreen.js";
import HomePage from "./Timeline/HomePage.js";
import { useNavigate } from "react-router-dom";

function IndexPage() {
    const [currentScreen, setCurrentScreen] = useState('start');
    const navigate = useNavigate();

    const renderScreen = () => {
        if (currentScreen === 'signup') {
            return <SignUpScreen onLoginClick={() => setCurrentScreen('login')} />;
        } else if (currentScreen === 'login') {
            return <LoginScreen onSignUpClick={() => setCurrentScreen('signup')} onLoginClick={() => setCurrentScreen('timeline')}/>;
        } else {
            return <StartScreen onSignUpClick={() => setCurrentScreen('signup')} onLoginClick={() => setCurrentScreen('login')} />;
        }
    };


    if (currentScreen === 'timeline') {
        navigate ('/home');
    }
    else {
        return (
            <div className="flex h-full w-full">
                <div className="md:block sm:flex-1 flex-0 hidden relative overflow-hidden">
                    <img src="/assets/images/bg.png" alt="" className="w-full h-full" />
                    <div className="absolute bottom-0 left-0 ml-12 mb-12"><img src="/assets/images/logo.svg" alt="" /></div>
                </div>
                <div className="flex-1 relative">
                    {renderScreen()}
                </div>
            </div>
        );
    }
    
}

export default IndexPage;
