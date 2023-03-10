import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    const renderContactList = props.contacts.map((el) => {
        return (
            <>
                <ContactCard el={el} />
            </>
        );
    });
    return renderContactList;
};

export default ContactList;
