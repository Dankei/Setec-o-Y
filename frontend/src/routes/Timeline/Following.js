import React, { useState, useEffect } from "react";
import NewYeet from "../../components/NewYeet.js";
import Yeet from "../../components/Yeet.js";
import ButtonCommon from "../../components/ButtonCommon.js";
import axios from 'axios';
import { useParams } from "react-router-dom";
import UserCard from "../../components/UserCard.js";


function ProfilePage({back}) {
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
            axios.get(`http://localhost:3001/api/users/followingList/${userInfo.id}`)
                .then(response => {
                    setUsers(response.data);
                })
                .catch(error => console.error('Error fetching tweets:', error));
        }
    }, [userInfo]);

    console.log(users)

    // Requisições dos seguidores 


    return (
        <div className="flex flex-col h-full w-full ">
            <div className="flex text-white  items-center ">
                
                <button onClick={back}>
                <div className="ms-2 size-5">
                    <img src="./assets/images/back.png"/>
                </div>
                </button>

                <div className="flex flex-col  font-thin text-xl text-white py-2">
                    <p className="text-white ms-2">{ userID } está seguindo</p>
                    <p className="text-white font-bold text-sm ms-2">12 Yeets</p>
                </div>
            </div>
            
            

            {users.map(user => (
                <UserCard 
                    key={user.id}
                    Username={user}
                />
            ))}
            
        </div>
        
    );
}

export default ProfilePage;