import React, { useState, useEffect } from "react";
import NewYeet from "../../components/NewYeet.js";
import Yeet from "../../components/Yeet.js";
import ButtonCommon from "../../components/ButtonCommon.js";
import axios from 'axios';

import Following from "./Following.js";
import Profile from "./Profile.js";


function ProfilePage() {
    const [currentScreen, setCurrentScreen] = useState('following');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const renderScreen = () => {
        if (currentScreen === 'following') {
            return <Following back={() => setCurrentScreen('profile')} />;
        } else if (currentScreen === 'followers') {
            return <Following back={() => setCurrentScreen('profile')} />;
        }
        else {
            return <Profile followingPage={() => setCurrentScreen('following')} followersPage={() => setCurrentScreen('followers')}  />;
        }
    };
        return (
            <div className="flex h-screen">
                {renderScreen()}
            </div>
            
        );
    }


export default ProfilePage;