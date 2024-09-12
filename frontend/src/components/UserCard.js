import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Yeet(props) {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    function goToProfile() {
        navigate(`/${props.Username}`);
        window.location.reload();
    }
    return(
        <>
            <button onClick={goToProfile}>

            
            <div className="flex flex-col  p-4">
                <div className="flex  text-white">
                    
                    
                    <div>
                        <img className="size-12 rounded-full" src="/assets/images/user-icon.jpg"/>
                    </div>
                    
                    <div className="ms-4 text-white w-[30rem]">
                        
                        <p className="">{props.Username}</p>
                        <p>Olá! Eu estou usando o Y! A nova rede social que vai revolucionar o mundo!</p>
                    </div>

                </div>
                
                
                
            </div>
            </button>
        
        </>
    );
}