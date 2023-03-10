import React from 'react';

import { Link } from 'react-router-dom';

const ContactCard = (props) => {
    return (
        <>
            <div className="border-2 border-violet-600 p-4 m-6 flex justify-around items-center">
                <Link to={`contact-details/${props.el.id}`}>
                    <h1 className="text-2xl font-semibold">{props.el.name}</h1>
                </Link>
                <h1 className="text-2xl font-semibold">{props.el.email}</h1>
                <button
                    className=" mx-6 bg-blue-600 px-6 py-2 rounded-lg text-white font-bold text-2xl cursor-pointer active:px-5 active:py-1 transition-all"
                    onClick={() => props.clickHanderler(props.el.id)}>
                    Delete Item
                </button>
            </div>
            <button className=" m-6 bg-blue-600 px-6 py-2 rounded-lg text-white font-bold text-2xl cursor-pointer active:px-5 active:py-1 transition-all">
                <Link to="/">Go to home Page</Link>
            </button>
        </>
    );
};

export default ContactCard;
