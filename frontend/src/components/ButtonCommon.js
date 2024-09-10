import React from 'react';


export default function Button(props) {
    return (
        <div>
            <a href={props.href}>
            <button onClick={props.onClick} type={props.type} className=" w-fit mx-auto px-6 py-2 rounded-full bg-slate-600 text-white transition-all hover:bg-white hover:text-black font-bold">
                {props.text}
            </button>
            </a>

        </div>
    )
}