import React, { useState, useEffect } from "react";
import NewYeet from "../../components/NewYeet.js";
import Yeet from "../../components/Yeet.js";
import ButtonCommon from "../../components/ButtonCommon.js";
import axios from 'axios';
import { useParams } from "react-router-dom";
import UserCard from "../../components/UserCard.js";


function ProfilePage({back}) {
    const [users, setUsers] = useState([]);
    const { userID } = useParams();

    useEffect(() => {
        axios.get('http://localhost:3001/api/tweets/author/1')
            .then(response => {
                const sortedUsers = response.data.sort((a, b) => b.id - a.id);
                setUsers(sortedUsers);
            })
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    // Requisições dos seguidores 


    return (
        <div className="flex flex-col h-full w-full border-solid border-gray-600 border-x-[1px]">
            <div className="flex text-white border-b-[1px] items-center border-gray-600">
                
                <button onClick={back}>
                <div className="ms-2 size-5">
                    <img src="./assets/images/back.png"/>
                </div>
                </button>

                <div className="flex flex-col  font-thin text-xl text-white py-2">
                    <p className="text-white ms-2">Seguindo de: { userID }</p>
                    <p className="text-white font-bold text-sm ms-2">12 Yeets</p>
                </div>
            </div>
            
            

            {users.map(user => (
                <UserCard 
                    key={user.id}
                    Username={user.text}
                />
            ))}
            
        </div>
        
    );
}

export default ProfilePage;