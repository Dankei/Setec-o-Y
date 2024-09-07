import React from 'react';

function LoginScreen({ onSignUpClick, onLoginClick }) {
    return (
        <div className="flex absolute justify-center flex-col items-center text-white top-0 bottom-0 left-0 right-0 gap-10">
            <h1 className="2xl:text-7xl lg:text-5xl text-4xl font-black">Login</h1>
            <form action="" className="flex flex-col gap-10 w-1/2">
                <div className="flex flex-col ">
                    <input type="text" id="nome" placeholder="@fulanodetal" className="border-b-[3px] bg-transparent w-full px-5 py-1 text-2xl focus:outline-none" />
                    <label htmlFor="nome" className="px-5 text-2xl font-thin">Nome de Usuário</label>
                </div>
                <div className="flex flex-col w-full">
                    <input type="password" id="nome" placeholder="****************" className="border-b-[3px] bg-transparent w-full px-5 py-1 text-2xl focus:outline-none" />
                    <label htmlFor="nome" className="px-5 text-2xl font-thin">Senha</label>
                </div>
            </form>
            <div className="w-full flex-col flex gap-10 my-5">
                <button
                    className="border-[3px] w-fit mx-auto px-14 py-5 rounded-full text-2xl transition-all hover:bg-white hover:text-black font-bold"
                    onClick={onLoginClick}
                >
                    Entrar
                </button>
                <hr className="sm:mx-20 mx-14 lg:mx-28" />
                <h2 className="2xl:text-3xl text-2xl font-light text-center">Ainda não possui uma conta?</h2>
                <button
                    className="border-[3px] w-fit mx-auto px-14 py-5 rounded-full text-2xl transition-all hover:bg-white hover:text-black font-bold"
                    onClick={onSignUpClick}
                >
                    Criar conta
                </button>
            </div>
        </div >
    )
};

export default LoginScreen;