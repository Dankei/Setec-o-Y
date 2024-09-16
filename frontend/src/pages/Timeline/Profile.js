import React, { useState, useEffect } from "react";
import Yeet from "../../components/Yeet.js";
import ButtonCommon from "../../components/ButtonCommon.js";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
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
        <div className="flex flex-col w-full h-fit border-x border-x-slate-600 ">
            <div className="flex flex-col py-2 text-xl font-thin text-white">
                <p className="text-white ms-2">{userInfo.username}</p>
                <p className="text-sm font-bold text-white ms-2">12 Yeets</p>
            </div>
            <div className="flex flex-col border-y-[1px] border-gray-600 ">
                <div className="flex flex-col">
                    <div className="w-full">
                        <img src="/assets/images/banner.jpg"></img>
                    </div>
                    <div className="flex justify-between w-full px-6 mt-3 ">
                        <div className="flex flex-col justify-center -mt-20 space-y-2 w-fit items-left">
                            <img className="mx-auto border-[6px] rounded-full size-32 border-slate-950" src="/assets/images/user-icon.jpg" />
                            <p className="text-lg font-bold text-center text-white">
                                {userInfo.username}
                            </p>
                        </div>
                        <ButtonCommon className="py-auto" onClick={
                            () => {
                                axios.post(`http://localhost:3001/api/users/follow`, { followerID: user.id, followedID: userInfo.id })
                                    .then(response => {
                                        console.log(response.data);
                                    })
                                    .catch(error => console.error('Error following user:', error));
                            }
                        } text="Seguir" /></div>
                </div>
                <div className="gap-2 my-5 space-y-3 text-white ms-6">
                    <p>Olá! Eu estou usando o Y! A nova rede social que vai revolucionar o mundo!</p>
                    <div className="flex space-x-3 text-white">
                        <Link onClick={followingPage}><p><b>{following}</b> Seguindo</p></Link>
                        <Link onClick={followersPage}><p><b>{followers}</b> Seguidores</p></Link>
                    </div>
                </div>
            </div>

            <div className="border-t border-t-slate-500"> {tweets.map(tweet => (
                <Yeet
                    id={tweet.id}
                    User={tweet.authorID}
                    Date={new Date(tweet.createdAt).toLocaleString()}
                    Content={tweet.text}
                />
            ))}</div>

        </div>

    );
}

export default ProfilePage;