import React, { useState } from "react";
import NewYeet from "../../components/NewYeet.js";
import Yeet from "../../components/Yeet.js"


function HomePage() {
    
    return (
        <div className="flex flex-col h-full w-full">
            <div className="flex justify-evenly font-thin text-xl text-white py-5">
                <p className="text-white">Todos</p>
                <p className="text-white">Seguindo</p>
            </div>
            <NewYeet />
            <Yeet 
            User="Dankei" 
            Date="Há 2 horas"
            Content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  "
            />          
        </div>
    );
}

export default HomePage;
