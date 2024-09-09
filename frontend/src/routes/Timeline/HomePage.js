import React, { useState, useEffect } from "react";
import NewYeet from "../../components/NewYeet.js";
import Yeet from "../../components/Yeet.js";

function HomePage() {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/tweets')
            .then(response => response.json())
            .then(data => setTweets(data))
            .catch(error => console.error('Error fetching tweets:', error));
    }, []);

    return (
        <div className="flex flex-col h-full w-full border-solid border-gray-600 border-x-[1px]">
            <div className="flex justify-evenly font-thin text-xl text-white py-5">
                <p className="text-white">Todos</p>
                <p className="text-white">Seguindo</p>
            </div>
            <NewYeet />
            {tweets.map(tweet => (
                <Yeet 
                    key={tweet.id}
                    User="Dankei" 
                    Date={new Date(tweet.createdAt).toLocaleString()}
                    Content={tweet.text}
                />
            ))}
        </div>
    );
}

export default HomePage;