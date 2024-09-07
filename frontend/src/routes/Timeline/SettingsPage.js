import React, { useState } from "react";
import Button from "../../components/ButtonModern.js";

function SettingsPage() {
    
    return (
        <div className="flex h-full w-full">
            <p className="text-white">Página de configurações</p>
            <Button text="Logout" href='/' />
        </div>
    );
}

export default SettingsPage;
