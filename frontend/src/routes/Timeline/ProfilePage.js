import React, { useState, useEffect } from "react";
import NewYeet from "../../components/NewYeet.js";
import Yeet from "../../components/Yeet.js";
import ButtonCommon from "../../components/ButtonCommon.js";
import axios from 'axios';

import Profile from "./Profile.js";


function ProfilePage() {
    const [currentScreen, setCurrentScreen] = useState('start');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const renderScreen = () => {
        if (currentScreen === 'signup') {
            return <SignUpScreen />;
        } else if (currentScreen === 'login') {
            return <LoginScreen />;
        }
        else {
            return <Profile />;
        }
    };
        return (
            <div className="flex h-screen">
                {renderScreen()}
            </div>
            
        );
    }


export default ProfilePage;