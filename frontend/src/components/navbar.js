import React from 'react'

export default function Navbar() {

    return (
        <nav className="flex justify-between items-center p-5 bg-white text-black">
            <div className="flex items-center">
                <img src="/images/logo.svg" alt="logo" className="w-10 h-10" />
                <h1 className="text-2xl font-black">Social Media</h1>
            </div>
            <div className="flex items-center gap-5">
                <a href="/home" className="text-lg font-semibold">Home</a>
                <a href="/profile" className="text-lg font-semibold">Profile</a>
                <a href="/settings" className="text-lg font-semibold">Settings</a>
            </div>
        </nav>
    )
}