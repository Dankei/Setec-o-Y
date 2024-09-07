import React from "react";
import Button from "../components/ButtonModern.js";

const ErrorPage = () => {
  return (
    <div className="flex h-full w-full justify-center items-center">
        <div className="flex flex-col justify-center items-center mt-10 p-5">
            <img src="/assets/images/logo.svg" alt="" />

            <div className="flex flex-col justify-center items-center mt-5 mb-5 p-5 space-y-3">
                <h1 className="text-6xl font-black text-white ">Erro 404</h1>
                <p className="text-white text-lg">Você não deveria estar aqui!</p>
                
            </div>
          
          <Button text="Voltar para a Home" href='/' />   

        </div>
        
    </div>
  );
}

export default ErrorPage;