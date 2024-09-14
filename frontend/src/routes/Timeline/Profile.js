import React, { useState, useEffect } from "react";
import Yeet from "../../components/Yeet.js";
import ButtonCommon from "../../components/ButtonCommon.js";
import axios from 'axios';
import { useParams } from "react-router-dom";

function ProfilePage({ followersPage, followingPage }) {
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



    useEffect(() => {
        if (userInfo.id) {
            axios.get(`http://localhost:3001/api/tweets/author/${userInfo.id}`)
                .then(response => {
                    const sortedTweets = response.data.sort((a, b) => b.id - a.id);
                    setTweets(sortedTweets);
                })
                .catch(error => console.error('Error fetching tweets:', error));
        }
    }, [userInfo]);

    // Requisições dos seguidores 

    useEffect(() => {
        if (userInfo.id) {
            axios.get(`http://localhost:3001/api/users/followers/${userInfo.id}`)
                .then(response => {
                    setFollowers(response.data);
                })
                .catch(error => console.error('Error fetching tweets:', error));
        }
    }, [userInfo]);

    // Requisições dos seguindos

    useEffect(() => {
        if (userInfo.id) {
            axios.get(`http://localhost:3001/api/users/following/${userInfo.id}`)
                .then(response => {
                    setFollowing(response.data);
                })
                .catch(error => console.error('Error fetching tweets:', error));
        }
    }, [userInfo]);


    return (
        <div className="flex flex-col w-full ">
            <div className="flex flex-col py-2 text-xl font-thin text-white">
                <p className="text-white ms-2">{userInfo.username}</p>
                <p className="text-sm font-bold text-white ms-2">12 Yeets</p>
            </div>
            <div className="flex flex-col border-y-[1px]  border-gray-600 ">
                <div className="relative flex">
                    <img src="/assets/images/banner.jpg"></img>
                    <div className="-bottom-[100px] border left-6 absolute  flex flex-col justify-center items-center space-y-2">
                        <img className="rounded-full size-32" src="/assets/images/user-icon.jpg" />
                        <p className="text-lg font-bold text-white">
                            @{userInfo.username}
                        </p>
                    </div>
                    <div className="absolute -bottom-14 right-4">
                        <ButtonCommon onClick={
                            () => {
                                axios.post(`http://localhost:3001/api/users/follow`, { followerID: user.id, followedID: userInfo.id })
                                    .then(response => {
                                        console.log(response.data);
                                    })
                                    .catch(error => console.error('Error following user:', error));
                            }
                        } text="Seguir" />
                    </div>
                </div>


            </div>
            <div className="mb-5 space-y-3 text-white mt-28 ms-6 ">
                <p>Olá! Eu estou usando o Y! A nova rede social que vai revolucionar o mundo!</p>
                <div className="flex mt-2 space-x-3 text-white">
                    <button onClick={followingPage}><p><b>{following}</b> Seguindo</p></button>
                    <button onClick={followersPage}><p><b>{followers}</b> Seguidores</p></button>
                </div>
            </div>
            {tweets.map(tweet => (
                <Yeet
                    id={tweet.id}
                    User={tweet.authorID}
                    Date={new Date(tweet.createdAt).toLocaleString()}
                    Content={tweet.text}
                />
            ))}

        </div>

    );
}

export default ProfilePage;