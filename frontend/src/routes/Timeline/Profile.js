import React, { useState, useEffect } from "react";
import NewYeet from "../../components/NewYeet.js";
import Yeet from "../../components/Yeet.js";
import ButtonCommon from "../../components/ButtonCommon.js";
import axios from 'axios';
import { useParams } from "react-router-dom";

function ProfilePage({followersPage, followingPage}) {
    const [tweets, setTweets] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'))
    const [userInfo, setUserInfo] = useState([]);
    const [following, setFollowing] = useState("");
    const [followers, setFollowers] = useState("");
    const { userID } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3001/api/users/findbyusername/${userID}`)
            .then(response => {
                setUserInfo(response.data);
            })
            .catch(error => console.error('Error fetching tweets:', error));
    }, []);

    console.log(userInfo.id)

    const teste = userInfo.id;

    console.log(teste)


    useEffect(() => {
        axios.get(`http://localhost:3001/api/tweets/author/${teste}`)
            .then(response => {
                const sortedTweets = response.data.sort((a, b) => b.id - a.id);
                setTweets(sortedTweets);
            })
            .catch(error => console.error('Error fetching tweets:', error));
    }, []);

    // Requisições dos seguidores 

    useEffect(() => {
        axios.get(`http://localhost:3001/api/users/followers/${userInfo.id}`)
            .then(response => {
                setFollowers(response.data);
            })
            .catch(error => console.error('Error fetching tweets:', error));
    }, []);

    // Requisições dos seguindos

    useEffect(() => {
        axios.get(`http://localhost:3001/api/users/following/${userInfo.id}`)
            .then(response => {
                setFollowing(response.data);
            })
            .catch(error => console.error('Error fetching tweets:', error));
    }, []);


    return (
        <div className="flex flex-col w-full ">
            <div className="flex flex-col font-thin text-xl text-white py-2">
                <p className="text-white ms-2">{ userID }</p>
                <p className="text-white font-bold text-sm ms-2">12 Yeets</p>
            </div>
            <div className="flex flex-col border-y-[1px] border-gray-600 ">
                <div className="flex relative">
                    <img src="/assets/images/banner.jpg"></img>
                    <div className="-bottom-[100px] left-6 absolute  flex flex-col justify-center items-center space-y-2">
                        <img className="size-32  rounded-full" src="/assets/images/user-icon.jpg"/>
                        <p className="text-white text-lg  font-bold">
                            @User
                        </p>
                    </div>
                    <div className="absolute -bottom-14 right-4">
                        <ButtonCommon text="Seguir"/>
                    </div>
                    
                </div>

                
            </div>
            <div className="mt-28 ms-6 text-white space-y-3 mb-5 ">
                <p>Olá! Eu estou usando o Y! A nova rede social que vai revolucionar o mundo!</p>
                <div className="flex text-white space-x-3 mt-2">
                    <button onClick={followingPage}><p><b>{following}</b> Seguindo</p></button>
                    <button onClick={followersPage}><p><b>{followers}</b> Seguidores</p></button>
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