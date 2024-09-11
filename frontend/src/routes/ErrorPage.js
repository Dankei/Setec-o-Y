import React from "react";
import Button from "../components/ButtonModern.js";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center p-5 mt-10">
        <img src="/assets/images/logo.svg" alt="" />

        <div className="flex flex-col items-center justify-center p-5 mt-5 mb-5 space-y-3">
          <h1 className="text-6xl font-black text-white ">Erro 404</h1>
          <p className="text-lg text-white">Você não deveria estar aqui!</p>

        </div>

        <Button text="Voltar para a Home" href='/' />

      </div>

    </div>
  );
}

export default ErrorPage;