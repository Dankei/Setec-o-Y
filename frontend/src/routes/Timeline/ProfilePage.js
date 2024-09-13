import React, { useState, useEffect } from "react";
import NewYeet from "../../components/NewYeet.js";
import Yeet from "../../components/Yeet.js";
import ButtonCommon from "../../components/ButtonCommon.js";
import axios from 'axios';
import { motion } from 'framer-motion';

import Following from "./Following.js";
import Followers from "./Followers.js";
import Profile from "./Profile.js";


function ProfilePage() {
    const [currentScreen, setCurrentScreen] = useState('profile');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const renderScreen = () => {
        if (currentScreen === 'following') {
            return <Following back={() => setCurrentScreen('profile')} />;
        } else if (currentScreen === 'followers') {
            return <Followers back={() => setCurrentScreen('profile')} />;
        }
        else {
            return <Profile followingPage={() => setCurrentScreen('following')} followersPage={() => setCurrentScreen('followers')} />;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }} className="flex h-screen">
            {renderScreen()}
        </motion.div>
    );
}



export default ProfilePage;