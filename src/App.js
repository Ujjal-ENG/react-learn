import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AddCard from './components/AddCard';
import ContactList from './components/ContactList';
import Header from './components/Header';

import uuid from 'react-uuid';

const App = () => {
    const LOACAL_STORAGE_KEY = 'contacts';
    const [contacts, setContacts] = useState([]);

    const addContactHandler = (contact) => {
        setContacts([...contacts, { id: uuid(), ...contact }]);
    };

    const removeItem = (id) => {
        const filteredID = contacts.filter((el) => el.id !== id);
        setContacts(filteredID);
    };

    useEffect(() => {
        const getItem = JSON.parse(localStorage.getItem(LOACAL_STORAGE_KEY));
        if (getItem) setContacts(getItem);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOACAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);

    return (
        <>
            <Header />
            <AddCard addContactHandler={addContactHandler} />
            <ContactList contacts={contacts} removeItem={removeItem} />
        </>
    );
};

export default App;
