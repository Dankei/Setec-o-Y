import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex h-full w-full justify-center items-center">
        <div className="flex flex-col justify-center items-center mt-36 p-5">
            <img src="/images/logo.svg" alt="" />

            <div className="flex flex-col justify-center items-center mt-20 p-5 space-y-3">
                <h1 className="text-6xl font-black text-white ">Erro 404</h1>
                <p className="text-white text-lg">Você não deveria estar aqui!</p>
            </div>
            

        </div>
        
    </div>
  );
}

export default ErrorPage;