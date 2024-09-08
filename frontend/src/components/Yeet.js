import React from 'react';
import ButtonCommon from './ButtonCommon.js';

export default function NewYeet() {
    return(
        <>
            <div className="flex flex-col border-y-[1px] border-gray-600 p-4">
                <div className="flex">
                    <img className="size-14 rounded-full" src="/assets/images/user-icon.jpg"/>
                    <textarea
                        type="text"
                        placeholder="O quê está acontecendo?"
                        className="flex-1 h-16 mx-5 text-lg bg-slate-950 text-white  focus:outline-none focus:ring-2 focus:ring-slate-950"
                    />
                </div>
                <div className=" flex justify-end mt-2">
                    <ButtonCommon  text="Post" />
                </div>
                
            </div>
            
        
        </>
    );
}