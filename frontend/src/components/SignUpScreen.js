import React from 'react';
import { useState } from 'react';


function SignUpScreen({ onLoginClick }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleSenhaChange = (event) => {
        setSenha(event.target.value);
    }

    return (
        <div className="flex absolute justify-center flex-col items-center text-white top-0 bottom-0 left-0 right-0 gap-10">
            <h1 className="2xl:text-7xl lg:text-5xl  text-4xl font-black">Criar conta</h1>
            <form action="" className="flex flex-col gap-10 w-1/2">
                <div className="flex flex-col ">
                    <input type="text" id="nome" placeholder="@fulanodetal" onChange={handleUsernameChange}  className="border-b-[3px] bg-transparent w-full px-5 py-1 text-2xl focus:outline-none" />
                    <label htmlFor="nome" className="px-5 text-2xl font-thin">Nome de Usuário</label>
                </div>
                <div className="flex flex-col w-full">
                    <input type="text" id="nome" onChange={handleEmailChange} placeholder="Digite aqui o seu melhor e-mail" className="border-b-[3px] bg-transparent w-full px-5 py-1 text-2xl focus:outline-none" />
                    <label htmlFor="nome" className="px-5 text-2xl font-thin">E-mail</label>
                </div>
                <div className="flex flex-col w-full">
                    <input type="password" id="nome" onChange={handleSenhaChange}  placeholder="****************" className="border-b-[3px] bg-transparent w-full px-5 py-1 text-2xl focus:outline-none" />
                    <label htmlFor="nome" className="px-5 text-2xl font-thin">Senha</label>
                </div>
            </form>
            <div className="w-full flex-col flex gap-10 my-5">
                <button
                    className="border-[3px] w-fit mx-auto px-14 py-5 rounded-full text-2xl transition-all hover:bg-white hover:text-black font-bold"
                    type="submit"
                    onClick={() => {
                        fetch('http://localhost:3001/api/users', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                username: username,
                                email: email,
                                senha: senha,
                            }),
                        })
                            .then((response) => {
                                if (!response.ok) {
                                    // Exemplo de erro baseado no status HTTP
                                    return response.text().then(text => {
                                        throw new Error(text || 'Network response was not ok');
                                    });
                                }
                                return response.json(); // ou response.text() dependendo do tipo de resposta esperado
                            })
                            .then((data) => {
                                console.log('Response data:', data);
                            })
                            .catch((error) => {
                                // O 'error' é o objeto de erro capturado no 'catch'
                                console.error('Fetch error:', error.message);
                            });
                    }}
                >
                    Criar conta
                </button>
                <hr className="sm:mx-20 mx-14 lg:mx-28" />
                <h2 className="2xl:text-3xl text-2xl font-light text-center">Já possui uma conta?</h2>
                <button
                    className="border-[3px] w-fit mx-auto px-14 py-5 rounded-full text-2xl transition-all hover:bg-white hover:text-black font-bold"
                    onClick={onLoginClick}
                >
                    Fazer Login
                </button>
            </div>
        </div>
    )
}

export default SignUpScreen;