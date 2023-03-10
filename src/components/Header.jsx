import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <div className="p-4 shadow-xl">
                <h1 className="text-3xl text-center font-bold">Contact Manager</h1>
            </div>

            <button className=" mx-6 bg-blue-600 px-6 py-2 rounded-lg text-white font-bold text-2xl cursor-pointer active:px-5 active:py-1 transition-all">
                <Link to="/add">Go to Add ITem</Link>{' '}
            </button>
        </>
    );
};

export default Header;
