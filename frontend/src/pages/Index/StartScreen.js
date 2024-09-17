import React from 'react';
import { motion } from 'framer-motion';

function StartScreen({ onSignUpClick, onLoginClick }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-10 text-white"
        >
            <img src="assets/images/logo.svg" alt="" />
            <h1 className="text-4xl font-black 2xl:text-7xl lg:text-5xl">Acontecendo agora</h1>
            <h2 className="text-2xl font-bold 2xl:text-3xl">Entre no Y hoje.</h2>
            <div className="flex flex-col w-full gap-10 my-5">
                <button
                    className="border-[3px] w-fit mx-auto px-14 py-5 rounded-full text-2xl transition-all hover:bg-white hover:text-black font-bold"
                    onClick={onSignUpClick}
                >
                    Criar conta
                </button>
                <hr className="sm:mx-20 mx-14 lg:mx-28" />
                <h2 className="text-2xl font-light text-center 2xl:text-3xl">Já possui uma conta?</h2>
                <button
                    className="border-[3px] w-fit mx-auto px-14 py-5 rounded-full text-2xl transition-all hover:bg-white hover:text-black font-bold"
                    onClick={onLoginClick}
                >
                    Fazer Login
                </button>
            </div>
        </motion.div>
    );
}

export default StartScreen;
