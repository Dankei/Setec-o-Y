import React, { useState, useEffect } from "react";
import NewYeet from "../../components/NewYeet.js";
import Yeet from "../../components/Yeet.js";
import axios from 'axios';
import { motion } from 'framer-motion';

function HomePage() {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/tweets/')
            .then(response => {
                const sortedTweets = response.data.sort((a, b) => b.id - a.id);
                setTweets(sortedTweets);
            })
            .catch(error => console.error('Error fetching tweets:', error));
    }, []);
    console.log(tweets)

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col h-full  w-full border-solid border-gray-600 border-x-[1px]"
        >
            <div className="flex py-5 text-xl font-thin text-white justify-evenly">
                <p className="text-white">Todos</p>
                <p className="text-white">Seguindo</p>
            </div>
            <NewYeet />
            <div className="h-full">
                {tweets.map(tweet => (
                    <Yeet
                        id={tweet.id}
                        User={tweet.authorID}
                        Date={new Date(tweet.createdAt).toLocaleString()}
                        Content={tweet.text}
                    />
                ))}
            </div>
        </motion.div >
    );
}

export default HomePage;