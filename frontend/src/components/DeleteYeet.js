import React from 'react';
import ButtonDelete from './ButtonDelete.js';
import ButtonCommon from './ButtonCommon.js';

export default function DeleteYeet(props) {
    return(
        <>
            <div className="flex flex-col justify-center items-center w-56 space-y-3">
                <h2 className="font-bold text-lg">Deletar Yeet?</h2>
                <p className="flex font-light text-center">
                    Essa ação não pode ser desfeita, o Yeet vai ser removido
                    de seu perfil, da timeline de quaisquer seguidores dos
                    resultados e da busca do Y.
                </p>
                <div className="flex space-x-2">
                    <ButtonCommon text="Cancela"/>
                    <ButtonDelete text="Excluir"/>
                </div>
                

            </div>
        </>
    )

}
