import React, { useState } from 'react';
import axios from 'axios';
import ButtonCommon from './ButtonCommon.js';
import PopUp from './PopUp.js';

export default function NewYeet() {
    const [text, setText] = useState('');
    const [authorID, setAuthorID] = useState('');
    const [open, setOpen] = useState(false);
    const [charCount, setCharCount] = useState(0);
    const user = JSON.parse(localStorage.getItem('user')) || {}; // Adiciona valor default

    const handleTextChange = (event) => {
        const newText = event.target.value;
        if (newText.length <= 140) {
            setText(newText);
            setCharCount(newText.length);
        }
    };

    const usernameInitial = user.username ? user.username[0] : ''; // Adiciona verificação

    return (
        <>
            <div className="flex flex-col border-y-[1px] border-gray-600 p-4">
                <div className="flex">
                    <div className="rounded-full w-fit bg-slate-200 h-fit">
                        <p className="pt-1 text-lg font-bold text-center size-10 text-slate-500">
                            {usernameInitial}
                        </p>
                    </div>
                    <textarea
                        value={text}
                        onChange={handleTextChange}
                        placeholder="O quê está acontecendo?"
                        className="flex-1 h-16 mx-5 text-lg text-white bg-slate-950 focus:outline-none focus:ring-2 focus:ring-slate-950"
                    />
                </div>
                <div className="flex items-center justify-end mt-2 space-x-3 ">
                    <p className="text-white">
                        {charCount}/140
                    </p>
                    <ButtonCommon
                        onClick={() => {
                            if (charCount === 0) {
                                setOpen(true);
                            } else {
                                axios.post('http://localhost:3001/api/tweets', {
                                    text: text,
                                    authorID: user.id
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
                                            console.error('Error response:', error.response.data);
                                        } else if (error.request) {
                                            console.error('Error request:', error.request);
                                        } else {
                                            console.error('Error message:', error.message);
                                        }
                                    });
                            }
                        }}
                        text="Post"
                    />
                </div>
            </div>

            <PopUp text="Digite algo para postar!" open={open} onClose={() => setOpen(false)}>
                <div className="flex flex-col items-center space-y-2">
                    <p className="text-lg font-bold">
                        Você deve inserir algo para yeetar!
                    </p>
                    <ButtonCommon onClick={() => setOpen(false)} text="Entendi" />
                </div>
            </PopUp>
        </>
    );
}
