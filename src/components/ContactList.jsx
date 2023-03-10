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
            </div>
        );
    });
    return renderContactList;
};

export default ContactList;
