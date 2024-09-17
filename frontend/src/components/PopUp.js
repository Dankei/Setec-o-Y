import React from "react";

export default function PopUp({ open, onClose, children }) {
    return (
        <div
            onClick={onClose}
            className={`
            fixed inset-0 top-0 bottom-0 flex justify-center items-center transition-colors duration-300 z-10
            ${open ? "visible bg-black/50" : "invisible"}
            `}
        >
            {/* PopUp */}
            <div
                onClick={(event) => event.stopPropagation()}
                className={`
            bg-slate-900 text-white rounded-xl shadow p-6 transition-all
            ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
            `}
            >

                {children}
            </div>
        </div>
    )
}