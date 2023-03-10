import React from 'react';
import ContactCard from './ContactCard';

import { Link } from 'react-router-dom';

const ContactList = (props) => {
    const deleteContact = (id) => {
        props.removeItem(id);
    };
    const renderContactList = props.contacts.map((el) => {
        return (
            <div key={el.id}>
                <div>
                    <ContactCard el={el} clickHanderler={deleteContact} />
                </div>

                <button className=" m-6 bg-blue-600 px-6 py-2 rounded-lg text-white font-bold text-2xl cursor-pointer active:px-5 active:py-1 transition-all">
                    <Link to="/">Go to home Page</Link>
                </button>
            </div>
        );
    });
    return renderContactList;
};

export default ContactList;
