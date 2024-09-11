import React from 'react';
import ButtonDelete from './ButtonDelete.js';
import ButtonCommon from './ButtonCommon.js';
import axios from 'axios';

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
                    <ButtonCommon onClick={props.onClose} text="Cancela"/>
                    <ButtonDelete onClick={() => 
                        {
                        console.log(length.text);    
                        axios.delete(`http://localhost:3001/api/tweets/${props.id}` 

                        , {
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
                        text="Excluir"/>
                </div>
                

            </div>
        </>
    )

}
