import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AddCard from './components/AddCard';
import ContactList from './components/ContactList';

import Header from './components/Header';

const App = () => {
    const LOACAL_STORAGE_KEY = 'contacts';
    const [contacts, setContacts] = useState([]);

    const addContactHandler = (contact) => {
        setContacts([...contacts, contact]);
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
            <ContactList contacts={contacts} />
        </>
    );
};

export default App;
