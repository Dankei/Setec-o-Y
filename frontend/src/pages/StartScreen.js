import React from 'react';

function StartScreen({ onSignUpClick, onLoginClick }) {
    return (
        <div className="flex absolute justify-center flex-col items-center text-white top-0 bottom-0 left-0 right-0 gap-10">
            <img src="/images/logo.svg" alt="" />
            <h1 className="2xl:text-7xl text-4xl lg:text-5xl font-black">Acontecendo agora</h1>
            <h2 className="2xl:text-3xl text-2xl font-bold">Entre no Y hoje.</h2>
            <div className="w-full flex-col flex gap-10 my-5">
                <button
                    className="border-[3px] w-fit mx-auto px-14 py-5 rounded-full text-2xl transition-all hover:bg-white hover:text-black font-bold"
                    onClick={onSignUpClick}
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
    );
}

export default StartScreen;
