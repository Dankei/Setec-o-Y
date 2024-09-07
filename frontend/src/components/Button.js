import React from 'react';


export default function Button(props) {
    return (
        <div>
            <a href={props.href}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {props.text}
            </button>
            </a>

        </div>
    )
}