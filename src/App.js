import React from 'react';
import { useState } from 'react';
import AddCard from './components/AddCard';
import ContactList from './components/ContactList';

import Header from './components/Header';

const App = () => {
    const [contacts, setContacts] = useState([]);

    const addContactHandler = (contact) => {
        setContacts([...contacts, contact]);
    };

    return (
        <>
            <Header />
            <AddCard addContactHandler={addContactHandler} />
            <ContactList contacts={contacts} />
        </>
    );
};

export default App;
