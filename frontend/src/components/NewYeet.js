import React from 'react';
import ButtonCommon from './ButtonCommon.js';
import { useState } from 'react';
import axios from 'axios';

export default function NewYeet() {
    const [text, setText] = useState('');
    const [authorID, setauthorID] = useState('');

    const handleTextChange = (event) => {
        setText(event.target.value);
    }
    return(
        <>
            <div className="flex flex-col border-y-[1px] border-gray-600 p-4">
                <div className="flex">
                    <img className="size-14 rounded-full" src="/assets/images/user-icon.jpg"/>
                    <textarea
                        value={text}
                        onChange={handleTextChange}
                        type="text"
                        placeholder="O quê está acontecendo?"
                        className="flex-1 h-16 mx-5 text-lg bg-slate-950 text-white  focus:outline-none focus:ring-2 focus:ring-slate-950"
                    />
                </div>
                <div className=" flex justify-end mt-2">
                    <ButtonCommon 
                    onClick={() => {
                        axios.post('http://localhost:3001/api/tweets', {
                            text: text,
                            authorId: "2"
                        }, {
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        })
                        .then((response) => {
                            console.log('Response data:', response.data);
                            window.location.reload();
                        })
                        .catch((error) => {
                            if (error.response) {
                                // O servidor respondeu com um status diferente de 2xx
                                console.error('Error response:', error.response.data);
                            } else if (error.request) {
                                // A requisição foi feita, mas nenhuma resposta foi recebida
                                console.error('Error request:', error.request);
                            } else {
                                // Algo aconteceu ao configurar a requisição
                                console.error('Error message:', error.message);
                            }
                        });
                    }}
                    type="submit" 
                    text="Post" />
                </div>
                
            </div>
            
        
        </>
    );
}