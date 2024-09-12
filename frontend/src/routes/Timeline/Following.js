import React, { useState, useEffect } from "react";
import NewYeet from "../../components/NewYeet.js";
import Yeet from "../../components/Yeet.js";
import ButtonCommon from "../../components/ButtonCommon.js";
import axios from 'axios';


function ProfilePage({back}) {
    const [tweets, setTweets] = useState([]);
    const [following, setFollowing] = useState(2);
    const [followers, setFollowers] = useState(5);

    useEffect(() => {
        axios.get('http://localhost:3001/api/tweets/author/2')
            .then(response => {
                const sortedTweets = response.data.sort((a, b) => b.id - a.id);
                setTweets(sortedTweets);
            })
            .catch(error => console.error('Error fetching tweets:', error));
    }, []);

    // Requisições dos seguidores 


    return (
        <div className="flex flex-col h-full w-full border-solid border-gray-600 border-b-2 border-x-[1px]">
            <div className="flex text-white border-b-[1px] items-center border-gray-600">
                
                <button onClick={back}>
                <div className="ms-2 size-5">
                    <img src="./assets/images/back.png"/>
                </div>
                </button>

                <div className="flex flex-col  font-thin text-xl text-white py-2">
                    <p className="text-white ms-2">Seguindo de: User</p>
                    <p className="text-white font-bold text-sm ms-2">12 Yeets</p>
                </div>
            </div>
            
            

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

export default ProfilePage;