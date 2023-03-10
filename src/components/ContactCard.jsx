import React from 'react';

const ContactCard = (props) => {
    return (
        <>
            <div key={props.el.id} className="border-2 border-violet-600 p-4 m-6 flex justify-around items-center">
                <h1 className="text-2xl font-semibold">{props.el.name}</h1>
                <h1 className="text-2xl font-semibold">{props.el.id}</h1>
                <h1 className="text-2xl font-semibold">{props.el.email}</h1>
                <button className=" mx-6 bg-blue-600 px-6 py-2 rounded-lg text-white font-bold text-2xl cursor-pointer active:px-5 active:py-1 transition-all">Delete Item</button>
            </div>
        </>
    );
};

export default ContactCard;
