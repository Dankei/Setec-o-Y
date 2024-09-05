import React, { useState } from "react";
import StartScreen from "../components/StartScreen.js";
import SignUpScreen from "../components/SignUpScreen.js";
import LoginScreen from "../components/LoginScreen.js";

function IndexPage() {
    const [currentScreen, setCurrentScreen] = useState('start');

    const renderScreen = () => {
        if (currentScreen === 'signup') {
            return <SignUpScreen onLoginClick={() => setCurrentScreen('login')} />;
        } else if (currentScreen === 'login') {
            return <LoginScreen onSignUpClick={() => setCurrentScreen('signup')} />;
        } else {
            return <StartScreen onSignUpClick={() => setCurrentScreen('signup')} onLoginClick={() => setCurrentScreen('login')} />;
        }
    };

    return (
        <div className="flex h-full w-full">
            <div className="md:block sm:flex-1 flex-0 hidden relative overflow-hidden">
                <img src="/images/bg.png" alt="" className="w-full h-full" />
                <div className="absolute bottom-0 left-0 ml-12 mb-12"><img src="/images/logo.svg" alt="" /></div>
            </div>
            <div className="flex-1 relative">
                {renderScreen()}
            </div>
        </div>
    );
}

export default IndexPage;
