import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    const deleteContact = (id) => {
        props.removeItem(id);
    };
    const renderContactList = props.contacts.map((el) => {
        return (
            <div key={el.id}>
                <ContactCard el={el} clickHanderler={deleteContact} />
            </div>
        );
    });
    return renderContactList;
};

export default ContactList;
