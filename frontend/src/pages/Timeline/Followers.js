import React, { useState, useEffect } from "react";
import NewYeet from "../../components/NewYeet.js";
import Yeet from "../../components/Yeet.js";
import ButtonCommon from "../../components/ButtonCommon.js";
import axios from 'axios';
import { useParams } from "react-router-dom";
import UserCard from "../../components/UserCard.js";


function ProfilePage({ back }) {
    const [userInfo, setUserInfo] = useState([]);
    const [users, setUsers] = useState([]);
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
            axios.get(`http://localhost:3001/api/users/followersList/${userInfo.id}`)
                .then(response => {
                    setUsers(response.data);
                })
                .catch(error => console.error('Error fetching tweets:', error));
        }
    }, [userInfo]);


    return (
        <div className="flex flex-col w-full h-full border-x border-x-slate-500">
            <div className="flex items-center text-white ">
                <button onClick={back}>
                    <div className="ms-2 size-5">
                        <img src="./assets/images/back.png" />
                    </div>
                </button>
                <div className="flex flex-col py-2 text-xl font-thin text-white">
                    <p className="text-white ms-2">Seguidores de: {userID}</p>
                    <p className="text-sm font-bold text-white ms-2">12 Yeets</p>
                </div>
            </div>
            <hr className="w-full h-px border-slate-500" />
            {users.map(user => (
                <div>
                    <UserCard
                        key={user.id}
                        Username={user}
                    />
                    <hr className="w-full h-px border-slate-500" />
                </div>
            ))}
        </div>
    );
}

export default ProfilePage;