import React, { useState } from "react";
import NewYeet from "../../components/NewYeet.js";


function HomePage() {
    
    return (
        <div className="flex flex-col h-full w-full">
            <div className="flex justify-evenly font-thin text-xl text-white py-5">
                <p className="text-white">Todos</p>
                <p className="text-white">Seguindo</p>
            </div>
            <NewYeet />          
        </div>
    );
}

export default HomePage;
