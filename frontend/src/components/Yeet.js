import React from 'react';
import ButtonCommon from './ButtonCommon.js';

export default function Yeet(props) {
    return(
        <>
            <div className="flex flex-col border-y-[1px] border-gray-600 p-4">
                <div className="flex  text-white">
                    
                    
                    <div>
                        <img className="size-12 rounded-full" src="/assets/images/user-icon.jpg"/>
                    </div>
                    <div className="ms-4 text-white w-[30rem]">
                        <div className="flex justify-between ">
                            <p className="text-sm"><b>{props.User}</b> - {props.Date} </p>
                            <p><img src="/assets/images/more.png"></img></p>
                        </div>
                        


                        <p className=" ">{props.Content}</p>
                        <div className="flex justify-between mt-5 w-[25rem]">
                            
                            <div className="flex space-x-2">
                                <p><img src="/assets/images/comment.png"/></p>
                                <p>0</p>
                            </div>
                            
                            <div className="flex space-x-2">
                                <p><img src="/assets/images/rt-unselected.png"/></p>
                                <p>0</p>
                            </div>

                            <div className="flex space-x-2">
                                <p><img src="/assets/images/heart-unselected.png"/></p>
                                <p>0</p>
                            </div>


                        </div>
                    </div>

                </div>
                
                
                
            </div>
            
        
        </>
    );
}