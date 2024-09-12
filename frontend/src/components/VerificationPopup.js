import React, { useState } from 'react';

function VerificationPopup({ onVerify, error }) {
    const [code, setCode] = useState('');

    const handleVerify = () => {
        if (code.length === 6) {
            onVerify(code); // envia o código para verificação
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="flex flex-col gap-3 p-6 text-center rounded-lg shadow-lg bg-slate-800">
                <h2 className="mb-4 text-2xl font-bold">Verificação de E-mail</h2>
                <p className="mb-2 text-white">Digite o código de 6 dígitos enviado para o seu e-mail.</p>
                <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    maxLength={6}
                    className="border-b-[3px] bg-transparent w-1/2 mx-auto text-center px-5 py-1 text-2xl focus:outline-none transition duration-300 ease-in-out transform focus:scale-105 focus:border-white"
                    placeholder="Código de verificação"
                />
                {error && <p className="text-red-500">{error}</p>}
                <button
                    className="border-[3px] w-fit mx-auto px-4 py-2 rounded-full text-2xl transition-all hover:bg-white hover:text-black font-bold"
                    onClick={handleVerify}
                >
                    Verificar
                </button>
            </div>
        </div>
    );
}

export default VerificationPopup;
