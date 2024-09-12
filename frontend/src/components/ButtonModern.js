import React from 'react';


export default function Button(props) {
    return (
        <div>
            <a href={props.href}>
            <button onClick={props.onClick} className="border-[3px] w-fit mx-auto px-4 py-2 rounded-full text-white transition-all hover:bg-white hover:text-black font-bold">
                {props.text}
            </button>
            </a>

        </div>
    )
}