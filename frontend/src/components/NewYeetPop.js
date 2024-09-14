import React from 'react';
import ButtonCommon from './ButtonCommon.js';
import { useState } from 'react';
import axios from 'axios';
import PopUp from './PopUp.js';
import { motion } from 'framer-motion';

export default function NewYeet() {
    const [text, setText] = useState('');
    const [authorID, setauthorID] = useState('');
    const [open, setOpen] = React.useState(false);
    const [charCount, setCharCount] = useState(0);
    const user = JSON.parse(localStorage.getItem('user'))

    const handleTextChange = (event) => {
        const newText = event.target.value;
        if (newText.length <= 140) {
            setText(newText);
            setCharCount(newText.length); // Atualiza o comprimento do texto
        }
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}>
            <div className="flex flex-col  p-4 w-[30rem] relative">
                <div className="flex">
                    <img className="rounded-full size-14" src="/assets/images/user-icon.jpg" />
                    <textarea
                        value={text}
                        onChange={handleTextChange}
                        type="text"
                        placeholder="O quê está acontecendo?"
                        className="flex-1 h-16 mx-5 text-lg text-white bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-950"
                    />
                </div>
                <div className="flex items-center justify-end mt-2 space-x-3 ">
                    <p className="text-white">
                        {charCount}/140
                    </p>
                    <ButtonCommon
                        onClick={() => {
                            console.log(length.text);
                            if (charCount == 0) {
                                setOpen(true)
                            } else{
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
                    }}}
                    type="submit" 
                    text="Post" />
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
        </motion.div>
    );
}